// "use client";

import Header from "@/app/markup/layout/header";
import Footer from "@/app/markup/layout/footer";

// import { useState } from "react";
// import LoadingBar from "react-top-loading-bar";

export default function PagesLayout({ children }) {
  // const [progress, setProgress] = useState(0);

  return (
    <>
      <Header />
      {children}
      {/* <LoadingBar
        color="#f27733"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <Footer />
    </>
  );
}
