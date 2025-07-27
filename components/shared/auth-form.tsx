"use client";
import { toast } from "sonner";

interface AuthFormTypes {
  type: "login" | "register";
}

import { useRouter } from "next/navigation";
import { CardContent } from "../ui/card";

export default function AuthForm(props: AuthFormTypes) {
  const isLoginForm = props.type === "login";
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted");
  };

  return (
    <>
      <form action={handleSubmit}>
        <CardContent>
          <div>
            <label htmlFor=""></label>
          </div>
        </CardContent>
      </form>
    </>
  );
}
