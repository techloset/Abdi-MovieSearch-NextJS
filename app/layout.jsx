import { Yatra_One } from "next/font/google";
import "./globals.css";

const poppins = Yatra_One({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "Movies Database ",
  description: "Movies Database by Abdi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
