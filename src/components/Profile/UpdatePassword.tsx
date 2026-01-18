"use client";

import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  UpdatePassowrdScheme,
  updatePasswordScheme,
  UpdateUserScheme,
} from "@/types";
import { BASE_API_URL } from "@/CONSTANTS";
import { toast } from "sonner";
import { useState } from "react";
function UpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<UpdatePassowrdScheme>({
    mode: "onSubmit",
    resolver: zodResolver(updatePasswordScheme),
  });

  const onSubmit: SubmitHandler<UpdatePassowrdScheme> = async (data) => {
    try {
      setIsLoading(true);
      console.log(
        JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      );
      const res = await fetch(`${BASE_API_URL}/user/update-password`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      });
      const body = await res.json();
      if (!res.ok) {
        toast.error(body.message);
        return;
      }

      toast.success(body.message as string);
    } catch (error) {
      console.log("Error ", JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-medium  md:text-xl text-lg">Change Password</h3>
      <Separator className="my-2" />
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label>Current Password</Label>
          <Input
            {...register("currentPassword")}
            type="password"
            className="focus-visible:ring-0 border-none rounded-none"
          />
          {errors.currentPassword && (
            <p className="text-sm text-error">
              {" "}
              {errors.currentPassword.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label>New Password</Label>
          <Input
            {...register("newPassword")}
            type="password"
            className="focus-visible:ring-0 border-none rounded-none"
          />
          {errors.newPassword && (
            <p className="text-sm text-error"> {errors.newPassword.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Confirm new password</Label>
          <Input
            {...register("confirmPassword")}
            type="password"
            className="focus-visible:ring-0 border-none rounded-none"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-error">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>
      <div className="my-4">
        <Button disabled={isLoading}>
          {isLoading ? "Loading...." : "Update Password"}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
