"use client";

import { Avatar } from "@radix-ui/react-avatar";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { BASE_API_URL } from "@/CONSTANTS";
import { toast } from "sonner";
import ConfirmDialog from "./ConfirmDialog";
function UploadImageForm({ imgUrl }: { imgUrl: string }) {
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [pendingData, setPendeingData] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${BASE_API_URL}/upload`, {
      body: formData,
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      toast("Error uploading file, try again later");
      return;
    }
    const data = await res.json();

    const url = data.data?.url ?? data.data?.secure_url;
  };
  return (
    <div className="space-x-4 flex items-center">
      <Avatar>
        <AvatarImage
          width={50}
          height={50}
          className="rounded-full w-20 h-20"
          src={imgUrl || "https://github.com/shadcn.png "}
        />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <Button
        className="text-center relative "
        onClick={() => setOpenConfirm(true)}
      >
        <Input
          name="avatar"
          type="file"
          className=" w-full h-full absolute top-0 left-0 opacity-0"
          onChange={(e) => {
            const selected = e.target.files?.[0];
            if (selected) setFile(selected);
          }}
        />
        <span> Upload</span>
      </Button>
      <Button className="border-error text-error" variant={"outline"}>
        <Trash2 /> Delete
      </Button>
      <ConfirmDialog
        file={file}
        setFile={setFile}
        openConfirm={openConfirm}
        setOpenConfirm={setOpenConfirm}
      />
    </div>
  );
}

export default UploadImageForm;
