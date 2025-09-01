import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "El-Soghayar",
  description: `
  Empower Your Digital Vision: Expert Programming & Web Development Solutions by Mahmoud Elsoghayar.
  \n\nWelcome to the digital world of Mahmoud Elsoghayar, a leading expert in software development. We specialize in transforming innovative ideas into powerful digital realities through cutting-edge programming. Whether you need responsive web development for a flawless user experience or robust mobile applications for iOS and Android, our solutions are built with precision and a passion for technology. Discover how our professional code and strategic approach can elevate your project.
  
  \n\nمحمود الصغير: الحلول المتكاملة في البرمجة وتطوير المواقع والتطبيقات
  \n\nمرحباً بكم في عالم محمود الصغير، خبير برمجه وتكنولوجيا المعلومات. نحن نقدم خدمات تطوير شاملة تهدف إلى بناء مواقع الويب وتطبيقات الهاتف المحمول بأعلى معايير الجودة. كل سطر من الكود الذي نكتبه مصمم لضمان الأداء الفائق والسهولة في الاستخدام. إذا كنت تبحث عن شريك موثوق لتحويل أفكارك إلى واقع، فإننا هنا لنقدم لك الدعم الكامل.
  
  \n\nSetzen Sie Ihre digitale Vision um: Experten-Programmierung und Web-Entwicklung von Mahmoud Elsoghayar 
  \n\nWillkommen in der digitalen Welt von Mahmoud Elsoghayar, einem führenden Experten für Software-Entwicklung. Wir sind darauf spezialisiert, innovative Ideen durch modernste Programmierung in leistungsstarke digitale Lösungen umzusetzen. Ob Sie eine reaktionsschnelle Web-Entwicklung für eine makellose Benutzererfahrung oder robuste mobile Anwendungen für iOS und Android benötigen – unsere Lösungen zeichnen sich durch Präzision und Leidenschaft für Technologie aus. Entdecken Sie, wie unser professioneller Code und unser strategischer Ansatz Ihr Projekt zum Erfolg führen.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
