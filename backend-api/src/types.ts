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
