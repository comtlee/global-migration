const LANGUAGE = {
  english: {
    languageCode: 'EN',
    native: 'Enlgish',
    image: {
      src: 'https://image.smartscore.kr/smartscore_gloabl/icon/ic_en.png',
      alt: 'Flag of United State Of America',
    },
  },
  vietnamese: {
    languageCode: 'VI',
    native: 'Tiếng Việt',
    image: {
      src: 'https://image.smartscore.kr/smartscore_gloabl/icon/ic_ti.png',
      alt: 'Flag of North Vietnam',
    },
  },
  thai: {
    languageCode: 'TH',
    native: 'ภาษาไทย',
    image: {
      src: 'https://image.smartscore.kr/smartscore_gloabl/icon/ic_vn.png',
      alt: 'Flag of Thailand',
    },
  },
  indonesian: {
    languageCode: 'ID',
    native: 'bahasa Indonesia',
    image: {
      src: 'https://image.smartscore.kr/smartscore_gloabl/icon/ic_id.png',
      alt: 'Flag of Republic of Indonesia',
    },
  },
  chinese: {
    languageCode: 'CN',
    native: '中文（简体字)',
    image: {
      src: 'https://image.smartscore.kr/smartscore_gloabl/icon/ic_cn.png',
      alt: 'Flag of China',
    },
  },
  taiwanese: {
    languageCode: 'TW',
    native: '中文（繁體字)',
    image: {
      src: 'https://image.smartscore.kr/smartscore_gloabl/icon/ic_tw.png',
      alt: 'Flag of Taiwan',
    },
  },
} as const;

type LANGUAGE = (typeof LANGUAGE)[keyof typeof LANGUAGE];

export default LANGUAGE;
