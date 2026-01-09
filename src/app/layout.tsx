import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIPossible | AI Business Consulting",
  description: "Multi-faceted AI consulting for ethics, governance, policy, and responsible implementation. Transform your organization with trustworthy AI.",
  keywords: ["AI consulting", "AI ethics", "AI governance", "AI policy", "responsible AI", "AI advisory"],
  openGraph: {
    title: "AIPossible | AI Business Consulting",
    description: "Transform your organization with trustworthy, ethical AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Subtle noise texture for depth */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
