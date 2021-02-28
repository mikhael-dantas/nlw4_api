import { Router } from 'express';

import { UsersController } from './controllers/UsersController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailsController } from './controllers/SendMailsController';
import { AnswersController } from './controllers/AnswersController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userController = new UsersController();
const surveysController = new SurveysController();
const sendMailController = new SendMailsController();
const answerController = new AnswersController();
const npsController = new NpsController();

router.post('/users', userController.create);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.index);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:survey_id', npsController.execute);

export { router };