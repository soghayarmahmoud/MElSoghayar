import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahmoud El Soghayar | Software & Embedded Systems Engineer",
  description: "Mahmoud El Soghayar is a Software & Embedded Systems Engineer building web applications, cross-platform mobile apps, and embedded hardware systems. Based in Luxor, Egypt.",
  keywords: [
    "Mahmoud El Soghayar",
    "software engineer",
    "embedded systems engineer",
    "web developer",
    "mobile developer",
    "Flutter developer",
    "React developer",
    "Next.js developer",
    "full-stack developer",
    "PCB design",
    "Arduino",
    "ESP32",
    "electronics engineer",
    "Egypt developer",
    "freelance developer"
  ],
  authors: [{ name: "Mahmoud El Soghayar" }],
  creator: "Mahmoud El Soghayar",
  publisher: "Mahmoud El Soghayar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elsoghayar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mahmoud El Soghayar | Software & Embedded Systems Engineer",
    description: "Software & Embedded Systems Engineer building web, mobile, and connected hardware systems. Flutter, React, Next.js, Arduino, ESP32.",
    url: "https://elsoghayar.dev",
    siteName: "Mahmoud El Soghayar",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        // TODO: Replace /images/og-image.jpg with an actual OG image asset
        alt: "Mahmoud El Soghayar — Software & Embedded Systems Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud El Soghayar | Software & Embedded Systems Engineer",
    description: "Software & Embedded Systems Engineer building web, mobile, and connected hardware systems.",
    // TODO: Replace /images/twitter-image.jpg with an actual Twitter card image asset
    images: ["/images/twitter-image.jpg"],
    creator: "@mahmoudsruby",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // TODO: Replace placeholder verification codes with real values from Google Search Console, Bing Webmaster Tools, etc.
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud El Soghayar",
    "jobTitle": "Software & Embedded Systems Engineer",
    "description": "Software & Embedded Systems Engineer building web applications, cross-platform mobile apps, and embedded hardware systems.",
    "url": "https://elsoghayar.dev",
    "sameAs": [
      "https://github.com/soghayarmahmoud",
      "https://linkedin.com/in/elsoghayar",
      "https://www.fiverr.com/mahmoudsruby",
      "https://mostaql.com/u/mahmoudsruby"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luxor",
      "addressCountry": "Egypt"
    },
    "knowsAbout": [
      "Web Development",
      "Mobile Development",
      "Flutter",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Embedded Systems",
      "Microcontrollers",
      "PCB Design",
      "Electronics",
      "Arduino",
      "ESP32",
      "Software Testing"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google AdSense Verification */}
        <meta name="google-adsense-account" content="ca-pub-3053984425671049" />
        
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3053984425671049"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Structured Data — Person schema */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0A0A0A] text-[#F5F5F5] transition-colors duration-300`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
