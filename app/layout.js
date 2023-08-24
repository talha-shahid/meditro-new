import "./globals.css";

// import Header from "./markup/layout/header";
// import Footer from "./markup/layout/footer";

export const metadata = {
  title: "PremierMedix",
  description:
    "PremierMedix stands as a comprehensive healthcare solutions provider, specializing in the areas of credentialing, medical billing, coding, and revenue cycle management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
