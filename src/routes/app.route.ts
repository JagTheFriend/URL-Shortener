import { Router } from 'express';
import AppController from '@controllers/app.controller';
import { Routes } from '@interfaces/routes.interface';

class AppRoute implements Routes {
  public path = '/';
  public router = Router();
  public appController = new AppController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.appController.index);
    this.router.post(`${this.path}shortUrl`, this.appController.shortUrl);
    this.router.get(`${this.path}:shortUrl`, this.appController.viewShortUrl);
  }
}

export default AppRoute;
