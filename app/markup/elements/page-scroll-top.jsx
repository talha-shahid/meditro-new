"use client";

import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";

export default function PageScrollTop() {
  const pathname = usePathname();
  // const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
