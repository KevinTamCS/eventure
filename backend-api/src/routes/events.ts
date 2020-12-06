import { Router, Request, Response } from 'express';
import { EventModel } from '../sequelize';

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
router.post('/', (req: Request, res: Response) => {
  console.log('Creating new event...');

  try {
    const eventData = req.body;
    const creationDateTime = new Date();

    const data = {
      title: eventData.title,
      organizer: eventData.organizer,
      startDateTime: new Date(eventData.startDateTime),
      endDateTime: new Date(eventData.endDateTime),
      summary: eventData.summary,
      description: eventData.description,
      banner: eventData.banner,
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
