import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Evan Diamantoro — UI/UX Designer",
  description:
    "Personal portfolio of Al Evan Diamantoro — UI/UX Designer specializing in brand identity, marketing materials, and web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
