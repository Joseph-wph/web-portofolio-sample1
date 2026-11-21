/**
 * SSOT for every file path under /public/assets.
 * Drop your files with exactly these names (or change the path here once).
 */
const BASE = '/assets';

export const ASSETS = {
  icons: {
    tech: {
      html: `${BASE}/icons/tech/html.svg`,
      css: `${BASE}/icons/tech/css.svg`,
      javascript: `${BASE}/icons/tech/javascript.svg`,
      typescript: `${BASE}/icons/tech/typescript.svg`,
      sequelize: `${BASE}/icons/tech/sequelize.svg`,
      mongodb: `${BASE}/icons/tech/mongoDb.svg`,
    },
    social: {
      facebook: `${BASE}/icons/social/facebook.svg`,
      instagram: `${BASE}/icons/social/instagram.svg`,
      linkedin: `${BASE}/icons/social/linkedin.svg`,
      tiktok: `${BASE}/icons/social/tiktok.svg`,
    },
  },
  images: {
    hero: {
      avatar: `${BASE}/images/hero/heroImage.png`,
      brush: `${BASE}/images/hero/heroBrush.png`,
    },
    about: {
      photo: `${BASE}/images/about/image1.jpg`,
    },
    portfolio: {
      one: `${BASE}/images/portfolio/portofolio1.jpg`,
      two: `${BASE}/images/portfolio/portofolio2.jpg`,
      three: `${BASE}/images/portfolio/portofolio3.jpg`,
    },
    logos: {
      airbnb: `${BASE}/images/logos/airbnb.svg`,
      dribbble: `${BASE}/images/logos/dribbble.svg`,
      zoom: `${BASE}/images/logos/zoom.svg`,
    },
    testimonials: {
      avatar: `${BASE}/images/testimonials/avatar1.png`,
    },
    faq: {
      avatar: `${BASE}/images/faq/avatarFaq.png`,
    },
    footer: {
      glassBoard: `${BASE}/images/footer/glassBoard.png`,
    },
  },
} as const;
