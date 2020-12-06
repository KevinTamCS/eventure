export interface Event {
  title: string;
  organizer: string;
  startDateTime: Date;
  endDateTime: Date;
  summary?: string | null;
  description?: string | null;
  banner?: string | null; // URL to banner on S3
  creationDateTime: Date;
  lastUpdateDateTime: Date;
}
