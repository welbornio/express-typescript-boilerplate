import {Router, Request, Response, NextFunction} from 'express';

export class ExampleRouter {
	router: Router;

	/**
	 * Initialize the UserRouter
	 */
	constructor() {
		this.router = Router();
		this.init();
	}

	/**
	 * Example method
	 * @param {e.Request} req
	 * @param {e.Response} res
	 * @param {e.NextFunction} next
	 */
	public exampleMethod(req: Request, res: Response, next: NextFunction) {
    res.send({
      msg: 'Success!'
    });
	}

	/**
	 * Take each handler, and attach to one of the Express.Router's
	 * endpoints.
	 */
	init() {
		this.router.get('/example', this.exampleMethod.bind(this));
	}

}

const exampleRouter = new ExampleRouter();
export default exampleRouter.router;
