"use client";
import { fetchHomePage } from "@/services/api";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HomePage } from "@/app/interface/interface";

const BannerContent = () => {
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

  return (
    <article className="flex w-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center justify-center text-xl font-bold text-primary-400 sm:text-4xl md:text-5xl">
          {homePage[0]?.heading}
        </h1>
      </section>
      <p className="mt-4 flex flex-col items-center justify-center px-14 text-center text-xs text-secondary-50 sm:text-base md:mt-8 md:p-0 md:text-xl">
        {homePage[0]?.description}
      </p>
    </article>
  );
};

export default BannerContent;