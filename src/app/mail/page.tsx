import { redirect } from "next/navigation";

export const metadata = {
  title: "Redirecting to Webmail | Bostik Accurate Construction",
  robots: "noindex, nofollow",
};

export default function MailRedirectPage() {
  redirect("https://www.spacemail.com/login/");
}
