"use client";

import { site } from "@/data/content";
import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Focus", ariaLabel: "Go to focus areas", link: "#focus" },
  { label: "Case Studies", ariaLabel: "Go to case studies", link: "#case-studies" },
  { label: "How I Build", ariaLabel: "Go to how I build", link: "#process" },
  { label: "Contact", ariaLabel: "Go to contact", link: "#contact" },
];

const socialItems = [{ label: "Email", link: `mailto:${site.email}` }];

export default function SiteMenu() {
  return (
    <StaggeredMenu
      position="right"
      isFixed
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      logoText={site.name}
      menuButtonColor="#111111"
      openMenuButtonColor="#111111"
      changeMenuColorOnOpen
      accentColor="#ff6b6b"
      colors={["#B497CF", "#5227FF"]}
    />
  );
}
