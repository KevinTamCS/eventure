/**
 * Data format for events.
 */
export interface Event {
  title: string;
  organizer: string;
  startDateTime: Date;
  endDateTime: Date;
  summary: string;
  description: string;
  banner: string; // URL to banner on S3
  creationDateTime: Date;
  lastUpdateDateTime: Date;
}

export interface EventFormRequest {
  eventInfo: {
    title: string;
    organizer: string; // UUID later
    organizerName?: string;
    category?: EventCategories;
    format?: Formats;
    language?: string;
    tags?: string[];
  };
  timeAndDate: {
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
    timeZone: Record<string, unknown>;
  };
  banner: {
    bannerImage?: File;
  };
  details: {
    summary?: string;
    description?: string;
  };
}

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
