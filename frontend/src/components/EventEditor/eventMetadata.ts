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

interface EventCategoryOptions {
  value: EventCategories;
  label: string;
}

export const eventCategoryOptions: EventCategoryOptions[] = [
  { value: EventCategories.Music, label: 'Music' },
  { value: EventCategories.Photography, label: 'Photography' },
  { value: EventCategories.Arts, label: 'Arts' },
  { value: EventCategories.Books, label: 'Books' },
  { value: EventCategories.FoodAndDrink, label: 'Food and Drink' },
  { value: EventCategories.ScienceAndTech, label: 'Science and Tech' },
  { value: EventCategories.LivePerformances, label: 'Live Performances' },
  {
    value: EventCategories.EducationAndLearning,
    label: 'Education and Learning',
  },
  { value: EventCategories.HomeAndLifestyle, label: 'Home and Lifestyle' },
  { value: EventCategories.HealthAndWellness, label: 'Health and Wellness' },
  { value: EventCategories.SportsAndFitness, label: 'Sports and Fitness' },
  { value: EventCategories.FilmAndMedia, label: 'Film and Media' },
  { value: EventCategories.LGBTQ, label: 'LGBTQ' },
  { value: EventCategories.Movements, label: 'Movements' },
  { value: EventCategories.CareerAndBusiness, label: 'Career and Business' },
  { value: EventCategories.Hobbies, label: 'Hobbies' },
  { value: EventCategories.GamesAndFun, label: 'Games and Fun' },
  { value: EventCategories.LanguageAndCulture, label: 'Language and Culture' },
  { value: EventCategories.Social, label: 'Social' },
  { value: EventCategories.Fashion, label: 'Fashion' },
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
  Talk = 'Talk',
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
