"use client";
import { useState } from "react";
import FooterLogo from "../FooterLogo";
import FooterContainer from "../FooterContainer";
import FooterNavLinks from "../FooterNavLinks";
import FooterSocialLinks from "../FooterSocialLinks";
import FooterCopyright from "../FooterCopyright";
import { SlSocialLinkedin, SlLocationPin } from "react-icons/sl";
import { MdWhatsapp, MdOutlineMailOutline } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(href);
      setLoading(false);
    }, 1000); // Simulating a network request
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-footer flex w-full items-center justify-center bg-primary pt-20 relative"
    >
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between md:items-start">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks
              title="Links"
              links={[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "on",
                  href: `${path === "/" ? "#about-us" : "/#about-us"}`,
                },
                {
                  name: "Blog",
                  href: "/blog",
                },
                {
                  name: "Projects",
                  href: `${path === "/" ? "#projects" : "/#projects"}`,
                },
              ].map((link) => ({
                ...link,
                onClick: () => handleLinkClick(link.href),
              }))}
            />

            <FooterNavLinks
              title="Vacancies"
              links={[
                {
                  name: "Front-End",
                  href: "/vacancies",
                },
                {
                  name: "Back-End",
                  href: "/vacancies",
                },
                {
                  name: "Mobile",
                  href: "/vacancies",
                },
                {
                  name: "UX/UI",
                  href: "/vacancies",
                },
              ].map((link) => ({
                ...link,
                onClick: () => handleLinkClick(link.href),
              }))}
            />

            <FooterNavLinks
              title="Privacy"
              links={[
                {
                  name: "Privacy",
                  href: "/privacy",
                },
                {
                  name: "Terms and conditions of use",
                  href: "/terms",
                },
                {
                  name: "All rights reserved",
                  href: "",
                },
              ].map((link) => ({
                ...link,
                onClick: () => handleLinkClick(link.href),
              }))}
            />
          </aside>
        </section>
        <FooterSocialLinks
          socialMedia={[
            {
              social_name: "+917880001415",
              href: "#",
              icon: MdWhatsapp,
            },
            {
              social_name: "sanatanexpress9@mail.com",
              href: "#",
              icon: MdOutlineMailOutline,
            },
            {
              social_name: "linkedin.com/company/SDS",
              href: "https://www.linkedin.com/company/juniors-developers-group/mycompany/",
              icon: SlSocialLinkedin,
            },
            {
              social_name:
                "Sanatan House, 284-B, New Loha Mandi, Dewas Naka, Indore (M.P)",
              href: "https://www.linkedin.com/company/juniors-developers-group/mycompany/",
              icon: SlLocationPin,
            },
          ]}
        />
        <FooterCopyright />
      </FooterContainer>
    </footer>
  );
};

export default Footer;
