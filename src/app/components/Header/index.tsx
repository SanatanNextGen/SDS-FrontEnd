"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar";
import logo from "@/assets/jdg.png";
import NavbarMobile from "../NavbarMobile";
import { useToggle } from "@/hooks/useToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchHomePage } from "@/services/api";
import { HomePage } from "@/app/interface/interface";

const Header = () => {
  const [homePage, setHomePage] = useState<HomePage[]>([]);
  useEffect(() => {
    const getHomePage = async () => {
      try {
        const data = await fetchHomePage();
        setHomePage(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getHomePage();
  }, []);
  const path = usePathname();

  const homePageLogo: string | undefined = homePage[0]?.logo
    ? `data:image/png;base64,${homePage[0].logo}`
    : undefined;

  const { modal, openModal, closeModal } = useToggle();

  return (
    <header className="container flex h-20 w-full items-center justify-between bg-primary transition-all">
      <Link href="/" className="flex" data-testid="logo-link">
        <figure className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
          <Image
            src={homePageLogo || logo.src}
            alt="logo"
            width={40}
            height={40}
            className="h-full w-full object-cover p-1"
          />
        </figure>
      </Link>

      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />

      <Link
        href={`${path === "/" ? "#contact" : "/#contact"}`}
        className="hidden h-10 w-36 items-center justify-center rounded-lg bg-primary-400 text-base font-semibold text-secondary-950 transition-all hover:text-white md:flex"
      >
        Contact US
      </Link>
    </header>
  );
};

export default Header;
