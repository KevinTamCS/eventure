import { Router, Request, Response } from 'express';
import { EventModel } from '../sequelize';
import { EventFormRequest } from '../types';

const router: Router = Router();

// Top events
router.get('/', (req: Request, res: Response) => {
  console.log('Getting events...');
  try {
    // const category = req.header('category');
    EventModel.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((error: string) => {
        console.error('Could not get events:');
        console.error(error);
        res.status(500).send('An error occurred while getting events.');
      });
  } catch (error: unknown) {
    console.error('An error occurred while getting events:');
    console.error(error);
    res.status(500).send('An error occurred while getting events.');
  }
});

// Get specific event
router.get('/:id', (req: Request, res: Response) => {
  console.log('Getting events...');
  try {
    const eventId: number = parseInt(req.params.id);

    EventModel.findByPk(eventId)
      .then((data) => {
        if (data !== null) {
          res.json(data);
        } else {
          res.status(404).send(`No event with event ID ${eventId} exists.`);
        }
      })
      .catch((error: string) => {
        console.error(`Could not get event data for event ID: ${eventId}`);
        console.error(error);
        res
          .status(500)
          .send(
            `An error occurred while getting the event data for the event with ID: ${eventId}.`
          );
      });
  } catch (error: unknown) {
    console.error(`Could not get event data for event ID: ${req.params.id}.`);
    console.error(error);
    res
      .status(500)
      .send(
        `An error occurred while getting the event data for the event with ID ${req.params.id}.`
      );
  }
});

// Create new event
// Requires auth
router.post('/', (req: Request, res: Response) => {
  console.log('Creating new event...');

  try {
    const eventData: EventFormRequest = req.body;
    const creationDateTime = new Date();

    // TODO: Call AWS lambda function to process banner and save on AWS S3

    const data = {
      // Event Info
      title: eventData.eventInfo.title,
      organizer: eventData.eventInfo.organizer,
      category: eventData.eventInfo.category,
      format: eventData.eventInfo.format,
      language: eventData.eventInfo.language,
      tags: eventData.eventInfo.tags,

      // Event Time, Date, and Timezone
      startDateTime: new Date(
        eventData.timeAndDate.startDate + ' ' + eventData.timeAndDate.startTime
      ),
      endDateTime: new Date(
        eventData.timeAndDate.endDate + ' ' + eventData.timeAndDate.endTime
      ),
      timeZone: JSON.stringify(eventData.timeAndDate.timeZone),

      // Event Banner Image URL
      bannerImage: 'localhost:3000/image.jpg', // AWS S3 location for banner

      // Event Details
      summary: eventData.details.summary,
      description: eventData.details.description,

      // Event Metadata
      creationDateTime: creationDateTime,
      lastUpdateDateTime: creationDateTime,
    };

    // Build the model
    EventModel.create(data)
      .then(() => {
        console.log('Saved event in database');
        res.status(200).send();
      })
      .catch((error: unknown) => {
        console.error('Could not save event:');
        console.error(error);
        res.status(500).send('An error occurred while creating the event.');
      });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while creating the event.');
  }
});

export default router;
