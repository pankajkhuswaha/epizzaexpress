"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const atAdmin = pathname.includes("admin");
  if (atAdmin) return;

  return (
    <header className="header-area">
      <div id="header-sticky" className="menu-area">
        <div className="container">
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <Image
                      src="/img/logo/logo.png"
                      width={100}
                      height={80}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block">
                <div className="cart-top">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="far fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menu-tigger">
                        <i className="fal fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-7">
                <div className="main-menu text-right pr-15">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-sub">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="has-sub">
                        <a href="menu.html">Menu</a>
                      </li>
                      <li className="has-sub">
                        <a href="#">Page</a>
                        <ul>
                          <li className="has-sub">
                            <a href="blog.html">Blog</a>
                            <ul>
                              <li>
                                <a href="blog-grid.html">Blog Grid</a>
                              </li>
                              <li>
                                <a href="blog.html"> Blog Right Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  Blog Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>

                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details.html">Shop Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                <a href="contact.html" className="btn ss-btn">
                  BOOK SEAT
                </a>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-menu">
          <span className="menu-close">
            <i className="fas fa-times"></i>
          </span>
          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action="http://wordpress.zcube.in/xconsulta/"
          >
            <input
              type="text"
              name="s"
              id="search"
              value=""
              placeholder="Search"
            />
            <button>
              <i className="fa fa-search"></i>
            </button>
          </form>

          <div id="cssmenu2" className="menu-one-page-menu-container">
            <ul id="menu-one-page-menu-1" className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="#home">
                  <span>+8 12 3456897</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="#howitwork">
                  <span>info@example.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-overly"></div>
      </div>
    </header>
  );
};

export default Header;
