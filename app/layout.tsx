import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Negociação Mobi",
  description: "Nova experiência de negociação dentro do MobiGestor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}