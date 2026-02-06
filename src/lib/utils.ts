import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pleaseLoginToast = (router: { push: (path: string) => void }) => {
  toast.error("Please login", {
    action: {
      label: "Login",
      onClick: () => router.push("/login"),
    },
  });
};
