import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
            <h1 className="font-semibold text-foreground text-xl sm:text-2xl xl:text-custom-2">
              {title}
            </h1>

          {/*  <ul className="flex items-center gap-2">
              <li className="text-custom-sm hover:text-blue">
                <Link href="/">Home /</Link>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li className="text-custom-sm last:text-blue capitalize" key={key}>
                    {page} 
                  </li>
                ))}
            </ul> */}
          </div>
        </div>
  );
};

export default Breadcrumb;
