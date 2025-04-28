import Contact from "@/components/Help";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Page | NextCommerce Nextjs E-commerce template",
  description: "This is Contact Page for NextCommerce Template",
  // other metadata
};

const HelpPage = () => {
  return (
    <main>
      <Help />
    </main>
  );
};

export default HelpPage;
