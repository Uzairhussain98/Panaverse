import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black bg-[url('/shape-hero.svg')] bg-no-repeat h-full  bg-[center_top_10rem]">
        {children}
      </body>
    </html>
  );
}
