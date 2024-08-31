import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import CreatedRecoilRoot from "./context/CreatedRecoilRoot";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twitter Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CreatedRecoilRoot>{children}</CreatedRecoilRoot>
        </AuthProvider>
      </body>
    </html>
  );
}