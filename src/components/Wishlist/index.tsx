"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { useAppSelector } from "@/redux/store";
import SingleItem from "./SingleItem";
import Link from "next/link";

export const Wishlist = () => {
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />

      <section className="overflow-hidden py-10 bg-card">
        {wishlistItems.length > 0 ? (

          <div className="max-w-[1170px] w-full py-5 mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
              <h2 className="font-medium text-foreground text-2xl">Your Wishlist</h2>
              <button className="text-blue">Clear Wishlist Cart</button>
            </div>

            <div className="bg-white rounded-[10px] shadow-1">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1170px]">
                  {/* <!-- table header --> */}
                  <div className="flex items-center py-5 px-10">
                    <div className="min-w-[83px]"></div>
                    <div className="min-w-[387px]">
                      <p className="text-dark">Product</p>
                    </div>

                    <div className="min-w-[205px]">
                      <p className="text-dark">Unit Price</p>
                    </div>

                    <div className="min-w-[265px]">
                      <p className="text-dark">Stock Status</p>
                    </div>

                    <div className="min-w-[150px]">
                      <p className="text-dark text-right">Action</p>
                    </div>
                  </div>

                  {/* <!-- wish item --> */}
                  {wishlistItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}
                </div>
              </div>
            </div>
          </div>)
          : (
            <div className="text-center mt-8 bg-card">
              <div className="mx-auto pb-7.5">
                <svg
                  className="mx-auto"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#F3F4F6" />
                  <path
                    d="M50 36.5C42.5 30 30 32.5 30 42C30 50 42.5 60 50 65C57.5 60 70 50 70 42C70 32.5 57.5 30 50 36.5Z"
                    fill="#8D93A5"
                  />
                </svg>
              </div>

              <p className="pb-6">Your wishlist is empty!</p>

              <Link
                href="/shop-with-sidebar"
                className="w-96 mx-auto flex justify-center font-medium text-white bg-dark py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-opacity-95"
              >
                Continue Shopping
              </Link>
            </div>
          )
        }
      </section>
    </>
  );
};
