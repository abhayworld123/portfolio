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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
