import type { NavigationMenuItem } from "@nuxt/ui";

export const navLinks: NavigationMenuItem[] = [
  {
    label: "Hem",
    icon: "i-lucide-home",
    to: "/",
  },
  // {
  //   label: 'Projekt',
  //   icon: 'i-lucide-folder',
  //   to: '/projects'
  // },
  {
    label: "Projekt",
    icon: "i-lucide-file-text",
    to: "/blog",
  },
  {
    label: "Kontakt",
    icon: "i-lucide-user",
    to: "/about",
  },
];
