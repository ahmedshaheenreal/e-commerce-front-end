"use client";

import UploadImageForm from "@/components/Profile/UploadImageForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { UpdateUserScheme, updateUserScheme, User } from "@/types";
import { useAuthStore } from "@/stores/auth.store";
import { BASE_API_URL } from "@/CONSTANTS";
import { toast } from "sonner";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import UpdatePassword from "./UpdatePassword";
interface Inputs extends User {
  password: string;
  newPassword: string;
}

function UserDataForm() {
  const user = useAuthStore((s) => s.user);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UpdateUserScheme>({
    resolver: zodResolver(updateUserScheme),
    mode: "onChange",
    values: user
      ? {
          firstName: user.firstName ?? "",
          lastName: user.lastName ?? "",
          email: user.email ?? "",
          phone: user.phone ?? "",
          address: user.address ?? "",
          dateOfBirth: user.dateOfBirth ?? "",
        }
      : undefined,
  });
  console.log(" user:", user);
  // useEffect(() => {
  //   if (user) {
  //     reset(
  //       {
  //         firstName: user.firstName || "",
  //         lastName: user.lastName || "",
  //         email: user.email || "",
  //         phone: user.phone || "",
  //         address: user.address || "",
  //         dateOfBirth: user.dateOfBirth || "",
  //       },
  //       { keepDirty: false },
  //     );
  //   }
  // }, [user, reset]);
  const submit: SubmitHandler<UpdateUserScheme> = async (data) => {
    const res = await fetch(`${BASE_API_URL}/user/profile`, {
      body: JSON.stringify({ ...data, role: "user" }),
      credentials: "include",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    if (!res.ok) {
      console.log(JSON.stringify(body));
      toast.error(body.message);
      return;
    }
    toast.success("User Info Updated");
  };
  console.log("current user", user);
  return (
    <>
      <div>
        <UploadImageForm imgUrl={user?.profilePicture || ""} />
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="textfields my-8 flex flex-col gap-y-4 ">
          <div className="flex gap-4">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input
                {...register("firstName", { required: true })}
                className="focus-visible:ring-0 border-none rounded-none"
              />
              {errors.firstName && (
                <p className="text-sm text-error">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input
                {...register("lastName", { required: true })}
                className="focus-visible:ring-0 border-none rounded-none"
              />
              {errors.lastName && (
                <p className="text-sm text-error">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              {...register("email", { required: true })}
              type="email"
              className="focus-visible:ring-0 border-none rounded-none"
            />
            {errors.email && (
              <p className="text-sm text-error">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Mobile Number</Label>
            <Input
              {...register("phone", { required: true })}
              type="tel"
              className="focus-visible:ring-0 border-none rounded-none"
            />
            {errors.phone && (
              <p className="text-sm text-error">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <Input
              {...register("address", { required: true })}
              type="text"
              className="focus-visible:ring-0 border-none rounded-none"
            />
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Date of birth</Label>
            <Input
              {...register("dateOfBirth", { required: true })}
              type="date"
              className="focus-visible:ring-0 border-none rounded-none"
            />
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" size={"lg"} className="cursor-pointer">
            Save
          </Button>
        </div>
      </form>

      <UpdatePassword />
    </>
  );
}

export default UserDataForm;
