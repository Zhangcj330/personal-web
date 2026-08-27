"use client";

import { site } from "@/data/content";
import StaggeredMenu from "@/components/StaggeredMenu";

const socialItems = [{ label: "Email", link: `mailto:${site.email}` }];

// `homeAnchors`: when true (default, used on the homepage) the menu links
// to same-page anchors like "#focus". Work detail pages aren't on "/", so
// those anchors need to point back to the homepage first (e.g. "/#focus").
export default function SiteMenu({ homeAnchors = true }: { homeAnchors?: boolean }) {
  const prefix = homeAnchors ? "" : "/";
  const menuItems = [
    { label: "Home", ariaLabel: "Go to homepage", link: homeAnchors ? "#hero" : "/" },
    { label: "What I Bring", ariaLabel: "Go to what I bring", link: `${prefix}#focus` },
    {
      label: "Featured Projects",
      ariaLabel: "Go to featured projects",
      link: `${prefix}#case-studies`,
    },
    { label: "Impact", ariaLabel: "Go to impact", link: `${prefix}#impact` },
    { label: "Contact", ariaLabel: "Go to contact", link: `${prefix}#contact` },
  ];

  return (
    <StaggeredMenu
      position="right"
      isFixed
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      logoText={homeAnchors ? undefined : "← Projects"}
      logoLink={homeAnchors ? undefined : "/#case-studies"}
      menuButtonColor="#111111"
      openMenuButtonColor="#111111"
      changeMenuColorOnOpen
      accentColor="#ff6b6b"
      colors={["#B497CF", "#5227FF"]}
    />
  );
}
