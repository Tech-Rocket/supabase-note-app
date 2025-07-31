import AuthForm from "@/components/shared/auth-form";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <>
      <div className="mt-20 flex flex-1 flex-col items-center">
        <Card className="w-full max-w-[33rem] rounded-sm shadow">
          <CardHeader className="mb-4">
            <CardTitle className="text-center text-3xl">Register</CardTitle>
          </CardHeader>

          <AuthForm type="register" />
        </Card>
      </div>
    </>
  );
}
