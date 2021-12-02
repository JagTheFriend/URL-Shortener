import { NextFunction, Request, Response } from 'express';
import appModel from '@models/app.model';

class AppController {
  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const urls = await appModel.find({});
      res.render('index', { shortUrls: urls });
    } catch (error) {
      next(error);
    }
  };
  public shortUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await appModel.create({ full: req.body.fullUrl });
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  };
  public viewShortUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const url = req.params.shortUrl;
      const shortUrl = await appModel.findOne({ short: url });
      if (shortUrl == null) return res.sendStatus(404);
      shortUrl.clicks++;
      shortUrl.save();
      res.redirect(shortUrl.full);
    } catch (error) {
      next(error);
    }
  };
}

export default AppController;
