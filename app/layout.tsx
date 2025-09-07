import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackTJ 13.0",
  description:
    "Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or create an Amazon Alexa skill? Program a drone? Create programs using the latest machine learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing projects, attend workshops to learn new tricks, and have a fantastic time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.className} antialiased`}>{children}</body>
    </html>
  );
}
