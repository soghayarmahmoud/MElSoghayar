import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './contexts/ThemeContext';
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
  title: "Mahmoud El Soghayar - Professional Freelance Web & Mobile Developer | React, Next.js, Flutter Expert",
  description: "Top-rated freelance web and mobile developer specializing in React, Next.js, Flutter, and full-stack development. Available on Upwork, Fiverr, Freelancer, Mostaql, and Nafezly. 5-star reviews, 20+ successful projects. Get professional web development services today.",
  keywords: [
    "freelance web developer",
    "freelance mobile developer",
    "React developer",
    "Next.js developer",
    "Flutter developer",
    "full stack developer",
    "Upwork freelancer",
    "Fiverr freelancer",
    "Freelancer.com expert",
    "Mostaql developer",
    "Nafezly developer",
    "web development services",
    "mobile app development",
    "frontend developer",
    "backend developer",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "MERN stack developer",
    "Egypt freelance developer",
    "remote web developer",
    "professional freelancer",
    "tech freelancer",
    "software developer for hire"
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
    title: "Mahmoud El Soghayar - Professional Freelance Web & Mobile Developer",
    description: "Top-rated freelance developer on Upwork, Fiverr, Freelancer. Expert in React, Next.js, Flutter. 20+ projects, 5-star reviews. Hire me for your next project!",
    url: "https://elsoghayar.dev",
    siteName: "Mahmoud El Soghayar Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mahmoud El Soghayar - Freelance Web & Mobile Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud El Soghayar - Freelance Web & Mobile Developer",
    description: "Top-rated freelance developer specializing in React, Next.js, Flutter. Available on all major platforms. 5-star reviews, professional service.",
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
    "jobTitle": "Freelance Web & Mobile Developer",
    "description": "Professional freelance developer specializing in React, Next.js, Flutter, and full-stack development",
    "url": "https://elsoghayar.dev",
    "sameAs": [
      "https://www.upwork.com/freelancers/mahmoudsruby",
      "https://www.fiverr.com/mahmoudsruby",
      "https://www.freelancer.com/u/mahmoudsruby",
      "https://mostaql.com/u/mahmoudsruby",
      "https://nafezly.com/mahmoudsruby"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Luxor",
      "addressCountry": "Egypt"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "Flutter",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Web Development",
      "Mobile Development",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Freelance Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Luxor",
        "addressCountry": "EG"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "20"
    }
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

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
