import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DW Company | Professional Painting & Carpentry in West Hartford, CT",
  description:
    "Licensed painting and carpentry services in West Hartford, CT. 6 years of experience in interior/exterior painting, deck installation, floor installation, bathroom remodeling, and custom carpentry. Free estimates!",
  keywords:
    "painting contractor west hartford, carpentry services ct, deck installation hartford, bathroom remodeling ct, floor installation west hartford, professional painter connecticut",
  authors: [{ name: "DW Company" }],
  openGraph: {
    title: "DW Company | Professional Painting & Carpentry in West Hartford, CT",
    description:
      "Licensed painting and carpentry services in West Hartford, CT with 6 years of experience. Free estimates available!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DW Company | Professional Painting & Carpentry in West Hartford, CT",
    description: "Professional painting and carpentry services with 6 years of experience",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://dwcompany.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
