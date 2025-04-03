import type React from "react";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

export const metadata = {
  title: "John Doe - Full Stack Developer",
  description:
    "Personal portfolio website of John Doe, a Full Stack Developer and UI/UX Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
