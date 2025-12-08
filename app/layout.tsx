import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({
  subsets: ["latin"],
});

const title = "HackTJ 13.0";
const description =
  "Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or create an Amazon Alexa skill? Program a drone? Create programs using the latest machine learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing projects, attend workshops to learn new tricks, and have a fantastic time!";
const ogImage = "/pink_black.png";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: ogImage,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
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
