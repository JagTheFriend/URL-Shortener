import { NextFunction, Request, Response } from 'express';

class AppController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('index');
    } catch (error) {
      next(error);
    }
  };
  public shortUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  };
}

export default AppController;
