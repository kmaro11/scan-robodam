import { redirect } from "next/navigation";

export default function Home() {
  redirect("/lt"); // Change "en" to your default language
}
