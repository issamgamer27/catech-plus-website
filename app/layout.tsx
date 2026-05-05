import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catech+ | Gaming & Informatique à Mostaganem",
  description:
    "Catech+ propose des jeux PlayStation, accessoires gaming, équipements PC et livraison partout en Algérie.",
  openGraph: {
    title: "Catech+",
    description: "Votre univers Gaming & Informatique à Mostaganem.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
