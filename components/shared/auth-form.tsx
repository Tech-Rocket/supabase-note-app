"use client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CardContent, CardFooter } from "../ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useActionState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/app/supabase-client";

interface AuthFormTypes {
  type: "login" | "register";
}

export default function AuthForm(props: AuthFormTypes) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoginForm = props.type === "login";
  const router = useRouter();

  const [isPending, startTranstion] = useTransition();

  const btnText = isPending ? (
    <Loader2 className="animate-spin" />
  ) : isLoginForm ? (
    "Login"
  ) : (
    "Sign up"
  );

  const linkText = isLoginForm ? "Sign up" : "Login";

  const handleSubmit = async (formData: FormData) => {
    if (isLoginForm) {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        console.log("Error loggin", signInError.message);
        return;
      }
    } else {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) {
        console.log("Error signing up", signUpError.message);
        return;
      }
    }
  };
  return (
    <>
      <form action={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email" className="text-lg font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="example@gmail.com"
              required
              disabled={isPending}
              className="h-12 rounded"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="password" className="text-lg font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              disabled={isPending}
              className="h-12 rounded"
            />
          </div>
        </CardContent>
        <CardFooter className="mt-4 flex w-full flex-col gap-5">
          <Button className="h-12 w-full cursor-pointer rounded text-sm font-semibold">
            {btnText}
          </Button>
          <p className="text-sm">
            {isLoginForm
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <Link
              className={`font-semibold text-blue-600 ${isPending ? "pointer-events-none opacity-50" : ""}`}
              href={isLoginForm ? "/sign-up" : "/login"}
            >
              {linkText}
            </Link>
          </p>
        </CardFooter>
      </form>
    </>
  );
}
