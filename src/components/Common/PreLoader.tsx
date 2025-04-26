import React from "react";
import { useTranslation } from "react-i18next";

const PreLoader = () => {
  const { t } = useTranslation();
  
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
    </div>
  );
};

export default PreLoader;
