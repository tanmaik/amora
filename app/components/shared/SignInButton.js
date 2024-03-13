'use client'

import { signIn } from "next-auth/react";

export default function SignInButton({ children }) {
  return <button onClick={() => signIn("google")}>{children}</button>;
}
