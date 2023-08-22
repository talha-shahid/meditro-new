import Header from "@/app/markup/layout/header";
import Footer from "@/app/markup/layout/footer";

export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
