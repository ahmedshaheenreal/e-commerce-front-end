import React, { useState } from "react";
import { BASE_API_URL } from "@/CONSTANTS";
import {
  AlertDialogAction,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogPortal,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogOverlay,
} from "../ui/alert-dialog";
import { toast } from "sonner";
import { set } from "lodash";
import { useAuthStore } from "@/stores/auth.store";
import type { User } from "@/types";
interface Props {
  openConfirm: boolean;
  setOpenConfirm: (b: boolean) => void;
  file: File | null;
  setFile: (f: File | null) => void;
}
function ConfirmDialog({ openConfirm, setOpenConfirm, file, setFile }: Props) {
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((s) => s.setUser);
  const user: User | null = useAuthStore((s) => s.user);
  const confirmSubmit = async () => {
    if (!file || !user) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file as File);
    try {
      const res = await fetch(`${BASE_API_URL}/upload-profile-pic`, {
        body: formData,
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Error uploading file, try again later");
        return;
      }

      toast.success("User Info Updated");
      setOpenConfirm(false);
      setFile(null);
      setUser({ ...(user as User), profilePicture: data.url as string });
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog open={openConfirm} onOpenChange={setOpenConfirm}>
      <AlertDialogPortal />
      <AlertDialogOverlay className="fixed inset-0 z-40 bg-black/80" />
      <AlertDialogContent className="fixed z-50 bg-bright">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Changes</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to save your profile picture?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={confirmSubmit} disabled={loading}>
            {loading ? "Loading..." : "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmDialog;
