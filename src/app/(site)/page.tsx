'use client'; // Add this at the top

import Home from "@/components/Home";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return ( <Home /> );
}
