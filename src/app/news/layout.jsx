import { Outfit } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
const outfit = Outfit({
  weight: ["500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Notícias",
  description: "Site Mackleaps",
};

export default function NewsLayout({ children }) {
  return <>{children}</>;
}
