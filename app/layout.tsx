import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhay Chaturvedi - Full Stack Developer",
  description: "Portfolio of Abhay Chaturvedi,   developer specializing in web applications and data science.",
  keywords: "Full Stack Developer, React, Node.js, JavaScript, Portfolio",
  openGraph: {
    title: "Abhay Chaturvedi - Full Stack Developer",
    description: "Portfolio of Abhay Chaturvedi, Full Stack Developer specializing in web applications and data science.",
    images: ["/noch.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Calibre:wght@400;600&family=SF+Mono:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
