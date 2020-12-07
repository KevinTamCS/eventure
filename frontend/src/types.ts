import { EventCategories, Formats } from './components/EventEditor/eventMetadata';

export interface Event {
  id: number;
  title: string;
  organizer: string;
  category?: EventCategories;
  format?: Formats;
  tags: string[];
  startDateTime: Date;
  endDateTime: Date;
  timeZone: Record<string, unknown>;
  banner?: string | null; // URL to banner on S3
  summary?: string | null;
  description?: string | null;
  creationDateTime?: Date;
  lastUpdateDateTime?: Date;
}
