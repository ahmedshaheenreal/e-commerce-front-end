"use client";

import UploadImageForm from "@/components/Profile/UploadImageForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "@/types";

function UserDataForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  interface Inputs extends User {
    password: string;
    newPassword: string;
  }
  const submit: SubmitHandler<User> = (data) => {};
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <UploadImageForm />
      </div>
      <div className="textfields my-8 flex flex-col gap-y-4 ">
        <div className="flex gap-4">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input
              {...register("firstName", { required: true })}
              className="focus-visible:ring-0 border-none rounded-none"
            />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input
              {...register("lastName", { required: true })}
              className="focus-visible:ring-0 border-none rounded-none"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            {...register("email", { required: true })}
            type="email"
            className="focus-visible:ring-0 border-none rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label>Mobile Number</Label>
          <Input
            {...register("phone", { required: true })}
            type="tel"
            className="focus-visible:ring-0 border-none rounded-none"
          />
        </div>
        <div className="space-y-2">
          <Label>Date of birth</Label>
          <Input
            {...register("dateOfBirth", { required: true })}
            type="date"
            className="focus-visible:ring-0 border-none rounded-none"
          />
        </div>
        <h3 className="font-medium  md:text-xl text-lg">Change Password</h3>
        <Separator />

        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label>Current Passowrd</Label>
            <Input
              type="password"
              className="focus-visible:ring-0 border-none rounded-none"
            />
          </div>
          <div className="space-y-2">
            <Label>New Passowrd</Label>
            <Input
              type="password"
              className="focus-visible:ring-0 border-none rounded-none"
            />
          </div>
          <div className="space-y-2">
            <Label>Confirm new passowrd</Label>
            <Input
              type="password"
              className="focus-visible:ring-0 border-none rounded-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" size={"lg"}>
          Save
        </Button>
      </div>
    </form>
  );
}

export default UserDataForm;
