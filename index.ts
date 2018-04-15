import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cookieSession from 'cookie-session';

import exampleRouter from './routers/example/router';

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
		this.express.listen(5252, () => console.log('Example app listening on port 5252!'));
	}

	private middleware(): void {
		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({extended: false}));
		this.express.use(helmet());
		this.express.use(cookieSession({
      // session information
		}));
	}

	private routes(): void {
		let router = express.Router();

		// placeholder route handler
		router.get('/*', (req, res, next) => {
			res.sendFile(__dirname + '/client/index.html');
		});

		this.express.use('/api/v1/example/', exampleRouter);
		this.express.use('/', router);
	}
}


export default new App().express;
