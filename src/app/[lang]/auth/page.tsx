import { redirect } from "next/navigation";

export default function AuthPage() {
  redirect("/lt/auth/login");
}
