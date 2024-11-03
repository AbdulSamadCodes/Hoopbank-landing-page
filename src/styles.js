const styles = {
  layout: {
    "container": "w-full max-w-[1100px] px-4 ms-auto me-auto",
    "section": "section grid grid md:grid-cols-2 items-start md:flex-row gap-10",
    "spacings": {
      "hero-padding": "pt-[130px]",
      "section-padding": "pt-[80px]"
    }
  },

  typography: {
    "hero-title": "hero__title text-white text-[2.2rem] xs:text-[2.6rem] md:text-[3rem] md:min-w-max font-bold",
    "section-title": "section__title text-white text-[2rem] xs:text-[2.4rem] md:text-[2.5rem] max-w-[25ch] font-bold",
    "section-text": "section__text hero__text text-dimWhite max-w-[50ch]"
  },
  utilities: {
    "flex": {
      "flex-items-center": "flex items-center",
      "flex-space-between": "flex justify-between items-center"
    },
    "spacings": {
      "margin-inline-auto": "ms-auto me-auto"
    }
  }
}

export { styles };