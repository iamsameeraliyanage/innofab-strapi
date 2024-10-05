import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar/NavBar";

const fontSans = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innofab | Empowering Digital Transformation",
  description:
    "Innofab is a leading digital agency offering expert consulting, innovative code solutions through CodeLab, and comprehensive training via Innofab Academy. We help businesses thrive in the digital age.",
  keywords:
    "Innofab, Digital Agency, CodeLab, Innofab Academy, Consulting, Web Development, Mobile Applications, Digital Transformation",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div>{children}</div>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
