import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Container } from "@mui/material";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar session={session ? true : false}/>
        <Container className="min-h-screen">
        {children}
        </Container>
        <Footer/>
        </body>
    </html>
  );
}
