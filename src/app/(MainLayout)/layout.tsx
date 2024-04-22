import '@/app/globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Icon from "@/app/(MainLayout)/favicon.ico"
import Sitebg from '@/components/sitebg/sitebg';
import MainNavigation from '@/components/navigation/mainNavigation';
import StoreProvider from '@/providers/redux/storeProvider';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ready Image Editor",
  description: "Ready Image Editor - Online Image Editing Software. Created by Jibon Krishna Roy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href={Icon.src} type="image/x-icon" />
        </head>
        <body className={inter.className}>
          <Sitebg />
          <MainNavigation />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
