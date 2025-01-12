import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-[100dvh] border-[5px]`}
      >
        <header className="border-[2px] border-[red] p-5">
          <div className="flex gap-2">
            <Link href="/">홈</Link>
            <Link href="/about">소개</Link>
            <Link href="/post/list">글</Link>
          </div>
        </header>
        <main className="border-[2px] border-[blue] p-5">{children}</main>
        <footer className="border-[2px] border-[pink] p-5">
          Copyright 2025.
        </footer>
      </body>
    </html>
  );
}
