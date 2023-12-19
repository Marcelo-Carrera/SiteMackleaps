import { Outfit } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
const outfit = Outfit({
  weight: ["500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mackleaps",
  description: "Site Mackleaps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
