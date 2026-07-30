export const languages = ['en', 'uk'] as const;
export type Language = (typeof languages)[number];

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export const siteCopy = {
  en: {
    home: 'Home',
    contact: 'Contact',
    writing: 'Writing',
    projects: 'Projects',
    music: 'Music',
    sections: 'Sections',
    writingIntro: 'Stories, essays, and longer works. The original texts are in Ukrainian.',
    projectsIntro: 'Personal tools, experiments, and ideas made tangible.',
    musicIntro: 'Recordings and musical experiments.',
    contactIntro: 'The simplest ways to reach me and find my work elsewhere.',
    professionalWork: 'Professional work',
    visitProject: 'Visit project',
    backToWriting: 'Back to writing',
    ukrainianWork: 'Ukrainian',
    useLightTheme: 'Use light theme',
    useDarkTheme: 'Use dark theme',
    mainNavigation: 'Main navigation',
    language: 'Language',
    toadAlt: 'Illustrated orange toad, Viktor Livar’s personal logo',
  },
  uk: {
    home: 'Головна',
    contact: 'Контакти',
    writing: 'Література',
    projects: 'Проєкти',
    music: 'Музика',
    sections: 'Розділи',
    writingIntro: 'Оповідання, есе та більші твори.',
    projectsIntro: 'Особисті інструменти, експерименти та втілені ідеї.',
    musicIntro: 'Записи та музичні експерименти.',
    contactIntro: 'Найпростіші способи зв’язатися зі мною та знайти мої роботи.',
    professionalWork: 'Професійна діяльність',
    visitProject: 'Відкрити проєкт',
    backToWriting: 'Назад до літератури',
    ukrainianWork: 'Українською',
    useLightTheme: 'Увімкнути світлу тему',
    useDarkTheme: 'Увімкнути темну тему',
    mainNavigation: 'Головна навігація',
    language: 'Мова',
    toadAlt: 'Намальована помаранчева жаба — особистий логотип Віктора Лівара',
  },
} as const;

export const sectionCards = [
  { slug: 'writing', image: '/images/pages/writing.png' },
  { slug: 'projects', image: '/images/pages/projects.png' },
  { slug: 'music', image: '/images/pages/music.png' },
] as const;

export const writings = [
  {
    slug: 'not-so-unequivocally',
    title: 'Не Все Так Однозначно',
    type: 'Оповідання',
    image: '/images/pages/writing/not-so-unequivocally.jpg',
  },
  {
    slug: 'hard-question',
    title: 'Складне питання',
    type: 'Роман',
    image: '/images/pages/writing/hard-question.jpg',
  },
  {
    slug: 'laplaces-demon',
    title: 'Демон Лапласа',
    type: 'Есе',
    image: '/images/pages/writing/demon.jpg',
  },
  {
    slug: 'glory-of-herostrat',
    title: 'Слава Герострата',
    type: 'Оповідання',
    image: '/images/pages/writing/glory-of-herostrat.jpg',
  },
  {
    slug: 'old-fibr-hook',
    title: 'Старий Прожилкований Гак',
    type: 'Оповідання',
    image: '/images/pages/writing/old-fibr-hook.jpg',
  },
  {
    slug: 'hoe-or-not-hoe',
    title: 'Сапати чи не сапати',
    type: 'Нарис про фах',
    image: '/images/pages/writing/hoe-or-not-hoe.jpg',
  },
] as const;

export const projects = [
  {
    name: 'protoMeal',
    href: 'https://protomeal.com',
    image: '/images/pages/projects/protomeal.jpg',
    description: {
      en: 'An online tool for monitoring, logging, and analyzing macronutrients and calories.',
      uk: 'Онлайн-інструмент для контролю, обліку та аналізу макронутрієнтів і калорій.',
    },
  },
  {
    name: 'lifetimer',
    href: 'https://yourlifetimer.com',
    image: '/images/pages/projects/lifetimer.jpg',
    description: {
      en: 'A visualization of your position on a lifeline based on average life expectancy.',
      uk: 'Візуалізація місця на лінії життя відповідно до середньої очікуваної тривалості життя.',
    },
  },
  {
    name: 'goalcraft',
    href: 'https://mygoalcraft.com',
    image: '/images/pages/projects/goalcraft.png',
    description: {
      en: 'A tool for defining goals, breaking them into manageable parts, and tracking progress.',
      uk: 'Інструмент для визначення цілей, поділу їх на досяжні частини та відстеження прогресу.',
    },
  },
] as const;

export const musicVideos = [
  { id: 'q67bEwfQSmQ', title: 'Viktor Livar — music recording 1' },
  { id: 'dTh6mKZ2gzg', title: 'Viktor Livar — music recording 2' },
] as const;

export const contacts = [
  {
    label: 'Email',
    value: 'viktor.livar.o@gmail.com',
    href: 'mailto:viktor.livar.o@gmail.com',
  },
  { label: 'Telegram', value: '@orangetoad', href: 'https://t.me/orangetoad' },
  {
    label: 'LinkedIn',
    value: 'Viktor Livar',
    href: 'https://www.linkedin.com/in/victor-livar-72024a93',
  },
  {
    label: 'YouTube',
    value: 'Viktor Livar',
    href: 'https://www.youtube.com/channel/UCFd4gJ9tPD0xBlWUU4QlpjA',
  },
] as const;
