"use client";

import Image from "next/image";
import banner from "@/assets/banner.png";
import { useEffect, useState } from "react";
import { fetchHomePage } from "@/services/api";
import { HomePage } from "@/app/interface/interface";

const BannerImage = () => {
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

  const homePageBanner: string | undefined = homePage[0]?.banner
    ? `data:image/png;base64,${homePage[0].banner}`
    : undefined;

  return (
    <figure className="relative">
      <Image
        src={homePageBanner || banner}
        alt="banner-image"
        width={1500}
        height={1500}
        className="w-full block object-cover"
      />
      <div className="to-shadow pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent"></div>
    </figure>
  );
};

export default BannerImage;
