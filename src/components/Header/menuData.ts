import { Menu } from "@/types/Menu";

export const getMenuData = (t: any) : Menu[]  =>  [
  {
    id: 1,
    title: t("global.navigation.home"),
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: t("global.navigation.shop"),
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: t("global.navigation.blog"),
    newTab: false,
    path: "/blogs/blog-grid",
  },
  {
    id: 4,
    title: t("global.navigation.contact"),
    newTab: false,
    path: "/contact",
  },
  {
    id: 5,
    title: t("global.navigation.about"),
    newTab: false,
    path: "/about",
  },
  {
    id: 6,
    title: t("global.navigation.more"),
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Mail Success",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,
    title: t("global.navigation.help"),
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blog Grid with sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog Grid",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Blog details with sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Blog details",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
