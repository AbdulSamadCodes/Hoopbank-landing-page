const styles = {
  layout: {
    "container": "w-full max-w-[1100px] px-8  ms-auto me-auto",
    "section": "section grid grid md:grid-cols-2 items-start  gap-16",
    "content-section":"grid gap-y-5",
    "spacings": {
      "hero-padding": "pt-[130px]",
      "section-padding": "pt-[90px]"
    }
  },

  typography: {
    "hero-title": `hero__title text-white text-[2.2rem] xs:text-[2.6rem] 
                    md:text-[3rem] md:min-w-max font-bold`,
    "section-title": `section__title text-white text-balance text-[1.9rem] xs:text-[2.2rem] 
                      md:text-[2.3rem] max-w-[25ch] font-semibold`,
    "section-text": `section__text hero__text text-dimWhite max-w-[45ch] text-[0.95rem]`
  },
  utilities: {
    "flex": {
      "flex-items-center": "flex items-center",
      "flex-space-between": "flex justify-between items-center"
    },
    "spacings": {
      "margin-inline-auto": "ms-auto me-auto"
    },
    "widths": {
      "has-figure": "max-w-[75%] sm:max-w-full ms-auto me-auto"
    }
  }
}

export { styles };