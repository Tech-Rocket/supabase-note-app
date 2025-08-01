// import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import DarkModeToggle from "../dark-mode-toggle";
// import LogOutButton from "./LogOutButton";
import LogOutButton from "../log-out-button";
// import { getUser } from "@/auth/server";
// import { SidebarTrigger } from "./ui/sidebar";
import { BounceButton } from "@/components/ui/bounce-button";

export default async function Header() {
  //   const user = await getUser();
  const user = null;

  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      //   style={{
      //     boxShadow: shadow,
      //   }}
    >
      {/* <SidebarTrigger className="absolute left-1 top-1" /> */}

      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />

        <h1 className="flex flex-col pb-1 text-xl leading-6 font-semibold">
          GOAT <span>Notes</span>
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}
