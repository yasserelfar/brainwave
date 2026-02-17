import { brainwave } from "../assets";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants/index";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  };
  const handlweClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 z-50 w-full  
            border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
        ${openNavigation ? "bg-n-8 " : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Braiunwave" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0
                right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto
                lg:bg-transparent `}
        >
          <div
            className="relative x-2 flex flex-col items-center justify-center
            m-auto lg:flex-row"
          >
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                onClick={handlweClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                                    
                                    ${
                                      item.onlyMobile ? "lg:hidden" : ""
                                    } px-2 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                                    ${
                                      item.url === pathname.hash
                                        ? "z-2 text-color-1"
                                        : "lg:text-n-1/50"
                                    }
                                    lg:leading-5 lg:hover:text-color-n-1
                                    xl:px-12
                                `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50
            lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          sign IN
        </Button>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
