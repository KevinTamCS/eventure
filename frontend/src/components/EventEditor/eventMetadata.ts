import { languages } from 'countries-list';
import timezones, { Timezone } from 'timezones.json';

// Organizers
export enum Organizers {
  User = 'USER',
  Other = 'OTHER',
}

export interface OrganizerOptions {
  value: Organizers;
  label: string;
}

// Event Categories
export enum EventCategories {
  Music = 'MUSIC',
  Photography = 'PHOTOGRAPHY',
  Arts = 'ARTS',
  Books = 'BOOKS',
  FoodAndDrink = 'FOOD_AND_DRINK',
  ScienceAndTech = 'SCIENCE_AND_TECH',
  LivePerformances = 'LIVE_PERFORMANCES',
  EducationAndLearning = 'EDUCATION_AND_LEARNING',
  HomeAndLifestyle = 'HOME_AND_LIFESTYLE',
  HealthAndWellness = 'HEALTH_AND_WELLNESS',
  SportsAndFitness = 'SPORTS_AND_FITNESS',
  FilmAndMedia = 'FILM_AND_MEDIA',
  LGBTQ = 'LGBTQ',
  Movements = 'MOVEMENTS',
  CareerAndBusiness = 'CAREER_AND_BUSINESS',
  Hobbies = 'HOBBIES',
  GamesAndFun = 'GAMES_AND_FUN',
  LanguageAndCulture = 'LANGUAGE_AND_CULTURE',
  Social = 'SOCIAL',
  Fashion = 'FASHION',
}

export const eventCategoriesReadable = {
  MUSIC: 'Music',
  PHOTOGRAPHY: 'Photography',
  ARTS: 'Arts',
  BOOKS: 'Books',
  FOOD_AND_DRINK: 'Food and Drink',
  SCIENCE_AND_TECH: 'Science and Tech',
  LIVE_PERFORMANCES: 'Live Performances',
  EDUCATION_AND_LEARNING: 'Education and Learning',
  HOME_AND_LIFESTYLE: 'Home and Lifestyle',
  HEALTH_AND_WELLNESS: 'Health and Wellness',
  SPORTS_AND_FITNESS: 'Sports and Fitness',
  FILM_AND_MEDIA: 'Film and Media',
  LGBTQ: 'LGBTQ',
  MOVEMENTS: 'Movements',
  CAREER_AND_BUSINESS: 'Career and Business',
  HOBBIES: 'Hobbies',
  GAMES_AND_FUN: 'Games and Fun',
  LANGUAGE_AND_CULTURE: 'Language and Culture',
  SOCIAL: 'Social',
  FASHION: 'Fashion',
};

interface EventCategoryOptions {
  value: EventCategories;
  label: string;
}

export const eventCategoryOptions: EventCategoryOptions[] = [
  { value: EventCategories.Music, label: eventCategoriesReadable.MUSIC },
  {
    value: EventCategories.Photography,
    label: eventCategoriesReadable.PHOTOGRAPHY,
  },
  { value: EventCategories.Arts, label: eventCategoriesReadable.ARTS },
  { value: EventCategories.Books, label: eventCategoriesReadable.BOOKS },
  {
    value: EventCategories.FoodAndDrink,
    label: eventCategoriesReadable.FOOD_AND_DRINK,
  },
  {
    value: EventCategories.ScienceAndTech,
    label: eventCategoriesReadable.SCIENCE_AND_TECH,
  },
  {
    value: EventCategories.LivePerformances,
    label: eventCategoriesReadable.LIVE_PERFORMANCES,
  },
  {
    value: EventCategories.EducationAndLearning,
    label: eventCategoriesReadable.EDUCATION_AND_LEARNING,
  },
  {
    value: EventCategories.HomeAndLifestyle,
    label: eventCategoriesReadable.HOME_AND_LIFESTYLE,
  },
  {
    value: EventCategories.HealthAndWellness,
    label: eventCategoriesReadable.HEALTH_AND_WELLNESS,
  },
  {
    value: EventCategories.SportsAndFitness,
    label: eventCategoriesReadable.SPORTS_AND_FITNESS,
  },
  {
    value: EventCategories.FilmAndMedia,
    label: eventCategoriesReadable.FILM_AND_MEDIA,
  },
  { value: EventCategories.LGBTQ, label: eventCategoriesReadable.LGBTQ },
  {
    value: EventCategories.Movements,
    label: eventCategoriesReadable.MOVEMENTS,
  },
  {
    value: EventCategories.CareerAndBusiness,
    label: eventCategoriesReadable.CAREER_AND_BUSINESS,
  },
  { value: EventCategories.Hobbies, label: eventCategoriesReadable.HOBBIES },
  {
    value: EventCategories.GamesAndFun,
    label: eventCategoriesReadable.GAMES_AND_FUN,
  },
  {
    value: EventCategories.LanguageAndCulture,
    label: eventCategoriesReadable.LANGUAGE_AND_CULTURE,
  },
  { value: EventCategories.Social, label: eventCategoriesReadable.SOCIAL },
  { value: EventCategories.Fashion, label: eventCategoriesReadable.FASHION },
];

// Event Formats
export enum Formats {
  Class = 'CLASS',
  Conference = 'CONFERENCE',
  Convention = 'CONVENTION',
  Festival = 'FESTIVAL',
  Meetup = 'MEETUP',
  Networking = 'NETWORKING',
  Party = 'PARTY',
  Talk = 'TALK',
  Tournament = 'TOURNAMENT',
}

interface FormatOptions {
  value: Formats;
  label: string;
}

export const formatOptions: FormatOptions[] = [
  { value: Formats.Class, label: 'Class' },
  { value: Formats.Conference, label: 'Conference' },
  { value: Formats.Convention, label: 'Convention' },
  { value: Formats.Festival, label: 'Festival' },
  { value: Formats.Meetup, label: 'Meetup' },
  { value: Formats.Networking, label: 'Networking' },
  { value: Formats.Party, label: 'Party' },
  { value: Formats.Talk, label: 'Talk' },
  { value: Formats.Tournament, label: 'Tournament' },
];

// Languages
// There are too many languages to manually add to an enum
interface LanguageOptions {
  value: string;
  label: string;
}

export const languageOptions: LanguageOptions[] = [];
Object.entries(languages).forEach(([languageCode, language]) => {
  languageOptions.push({
    value: languageCode,
    label: language.name,
  });
});

// Time Zones
// There are too many time zones to manually add to an enum
interface TimeZoneOptions {
  value: Timezone;
  label: string;
}

export const timeZoneOptions: TimeZoneOptions[] = [];
timezones.forEach((timezone) => {
  timeZoneOptions.push({
    value: timezone,
    label: timezone.text,
  });
});
