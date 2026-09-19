export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "After A While Flower Co.",
  description: "Fresh Flowers, Beautiful Tables, Every Week",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/interest",
    }
  ],
  navMenuItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/interest",
    }
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
