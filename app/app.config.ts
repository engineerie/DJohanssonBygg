export default defineAppConfig({
  global: {
    picture: {
      light: "/images/Snickare Person.jpg",
      dark: "/images/Snickare Person.jpg",
      alt: "Daniel Johansson",
    },
    meetingLink: "tel:+46730728531",
    email: "info@djohanssonbygg.se",
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
