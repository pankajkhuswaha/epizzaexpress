import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChildrenProps } from "@/types";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "E Pizza Express | Delicious Pizza , Momos , Chowein , Burger , Fast Food and Wrap in Faridabad | Dine-In & Takeaway",
  description:
    "Discover the best pizza in Faridabad at E Pizza Express. Enjoy our delicious, freshly made pizzas in our cozy restaurant or order for takeaway. We offer a wide range of mouth-watering pizzas, sides, and beverages. Visit us today for a fantastic dining experience!",
  keywords:
    "E Pizza Express,pizza,momos,wrap,chowein,faridabad,epizzaexpress, e-pizza-express, e pizza express, Pizza Faridabad, Best pizza in Faridabad, Dine-in pizza Faridabad, Takeaway pizza Faridabad, Pizza restaurant Faridabad, Pizza near me, Gourmet pizza, Pizza specials, Pizza menu, Italian pizza, Homemade pizza, Pizza place Faridabad",
  other: {
    "theme-color": "#ffce1c",
    "color-scheme": "dark light",
    "twitter:image": "/img/logo/logo.png",
    "twitter:card": "summary_large_image",
    "og:url": "https://epizzaexpress.in/",
    "og:image": "/img/logo/logo.png",
    "og:type": "website",
    "og:site_name": "E Pizza Express",
    "og:title":
      "E Pizza Express | Delicious Pizza , Momos , Chowein , Burger , Fast Food and Wrap in Faridabad | Dine-In & Takeaway",
    "og:description":
      "Discover the best pizza in Faridabad at E Pizza Express. Enjoy our delicious, freshly made pizzas in our cozy restaurant or order for takeaway. We offer a wide range of mouth-watering pizzas, sides, and beverages. Visit us today for a fantastic dining experience!",
  },
};

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <Script
          src="/js/vendor/modernizr-3.5.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/vendor/jquery-1.12.4.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/one-page-nav-min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.meanmenu.min.js" strategy="beforeInteractive" />
        <Script src="/js/slick.min.js" strategy="beforeInteractive" />
        <Script src="/js/ajax-form.js" strategy="beforeInteractive" />
        <Script src="/js/paroller.js" strategy="beforeInteractive" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/js_isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/js/imagesloaded.min.js" strategy="beforeInteractive" />
        <Script src="/js/parallax.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/jquery.waypoints.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/jquery.counterup.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/parallax-scroll.js" strategy="beforeInteractive" />
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/element-in-view.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.nice-select.js" strategy="beforeInteractive" />
        <Script
          src="/js/bootstrap-datepicker.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
