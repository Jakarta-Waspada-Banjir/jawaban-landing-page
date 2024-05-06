import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport = {
  themeColor: "#50E6FF",
  colorScheme: "only light",
};

export const metadata = {
  title: {
    default: "Jakarta Waspada Banjir",
    template: `%s | Jakarta Waspada Banjir`,
  },
  description:
    "Sumber informasi resmi untuk antisipasi dan tanggap darurat banjir di Jakarta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="AbS21azRyEUpwpM3ccAT3FXYd8aV_fqn2_HWpDriYZ4"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
