import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inviteData } from "@/data/invite";

export const metadata: Metadata = {
  title: `${inviteData.couple.brideFirstName} & ${inviteData.couple.groomFirstName} | Wedding Invitation`,
  description: `Wedding celebration of ${inviteData.couple.brideFullName} & ${inviteData.couple.groomFullName}. ${inviteData.couple.hashtag}`,
  openGraph: {
    title: `${inviteData.couple.brideFirstName} & ${inviteData.couple.groomFirstName} — Wedding Invitation`,
    description: `We joyfully invite you to celebrate with us. ${inviteData.couple.hashtag}`,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Playball&family=Pinyon+Script&family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="paper-texture min-h-screen text-[#5A252C] antialiased selection:bg-[#EBD7DA] selection:text-[#5A252C]">
        {children}
      </body>
    </html>
  );
}
