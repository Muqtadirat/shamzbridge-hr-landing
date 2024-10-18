import type { Metadata } from "next";
import "./globals.css";
import Layout from "./layout/Index";

export const metadata: Metadata = {
  title: "Shamzbridge Consult | HR Solutions",
  description:
    "Shamzbridge Consult offers comprehensive HR consulting services, talent management, recruitment solutions, and employee training to help businesses optimize their workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
