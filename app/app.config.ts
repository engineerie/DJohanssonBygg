import { container } from "#build/ui";

export default defineAppConfig({
  global: {
    picture: {
      dark: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      light:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "My profile picture",
    },
    meetingLink: "https://cal.com/",
    email: "ui-pro@nuxt.com",
    available: true,
  },
  ui: {
    icons: {
      serverBundle: false,
      // dynamic: true,
    },
    colors: {
      primary: "daniel",
      neutral: "neutral",
      daniel: "daniel",
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title:
          "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl font-medium",
        description:
          "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `D.Johansson Byggservice • © ${new Date().getFullYear()}`,
    colorMode: false,
    phone: {
      icon: "i-heroicons-phone-20-solid",
      number: "+46 73 072 85 31",
    },
    email: {
      address: "info@djohanssonbygg.se",
      icon: "i-heroicons-envelope-20-solid",
    },
    location: {
      street: "Telnebacka 12",
      postCode: "432 66",
      county: "Veddige",
      icon: "i-heroicons-map-pin-20-solid",
    },
  },
});
