import "./globals.css";

import Header from "./markup/layout/header";
import Footer from "./markup/layout/footer";

export const metadata = {
  title: "Meditro",
  description: "A Medical Billing Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
