"use client";

import { Avatar } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trash2 } from "lucide-react";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { BASE_API_URL } from "@/CONSTANTS";
import { toast } from "sonner";
function UploadImageForm() {
  const handleSubmit = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    const res = await fetch(`${BASE_API_URL}/upload`, {
      body: formData,
      method: "POST",
    });
    if (!res.ok) {
      toast("Error uploading file, try again later");
    }
    const data = await res.json();
  };
  return (
    <div className="space-x-4 flex items-center">
      <Avatar>
        <AvatarImage
          width={50}
          height={50}
          className="rounded-full w-20 h-20"
          src="https://github.com/shadcn.png "
        />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <Button className="text-center relative ">
        <Input
          name="avatar"
          type="file"
          className=" w-full h-full absolute top-0 left-0 opacity-0"
        />
        <span> Upload</span>
      </Button>
      <Button className="border-error text-error" variant={"outline"}>
        <Trash2 /> Delete
      </Button>
    </div>
  );
}

export default UploadImageForm;
