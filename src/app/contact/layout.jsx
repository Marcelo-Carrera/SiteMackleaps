import { Outfit } from "next/font/google";
import "../globals.css";
const outfit = Outfit({
  weight: ["500", "600", "700", "800", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Contato",
  description: "Site Mackleaps",
};

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
