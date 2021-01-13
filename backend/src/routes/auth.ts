import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import { User, UserJoinRequest, UserLoginRequest } from '../types';
import { UserModel } from '../sequelize';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  console.log('Getting users...');
  try {
    const userData: UserLoginRequest = req.body;

    // Get hashed password from database
    const passwordHash = await UserModel.findOne({
      where: {
        email: userData.email,
      },
      attributes: ['passwordHash'],
    });



    console.log(passwordHash);
  } catch (error) {
    console.error(error);
    res.status(500).send('Could not log in user.');
  }
});

router.post('/join', (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const userData: UserJoinRequest = req.body;

    // Hash password and store hash in database
    bcrypt.hash(userData.password, 12, (err, hash) => {
      const userDataWithHash: User = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        passwordHash: hash,
        onboardingComplete: false,
      };

      UserModel.create(userDataWithHash)
        .then((result) => {
          console.log('Success');
          res.status(200).send();
        })
        .catch((error) => {
          console.error(error);
          res
            .status(500)
            .send('An error occurred while creating a new account.');
        });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while creating a new account.');
  }
});

export default router;
