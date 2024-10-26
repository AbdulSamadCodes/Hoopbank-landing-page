const styles = {
   layout : {
    "container":"w-full max-w-[1100px] px-4 ms-auto me-auto",
    "section":"section  flex flex-col items-start md:flex-row gap-10",
    "spacings":{
      "hero-padding":"pt-[130px]",
      "section-padding":"pt-[80px]"
    }
  },

  typography : {
    "hero-title":"text-white text-[2rem] xs:text-[2.5rem] md:text-[3rem] md:min-w-max font-bold",
    "section-text":"section__text hero__text text-dimWhite max-w-[50ch] text-balance"
  },

  utilities : {
    "flex" : {
      "flex-items-center":"flex items-center",
      "flex-space-between":"flex justify-between items-center"
    },
    "spacings" : {
      "margin-inline-auto" : "ms-auto me-auto"
    }
  }
}

export { styles };