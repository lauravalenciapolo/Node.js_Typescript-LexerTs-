import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from "./routes";
import { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from 'express';


require('./db.ts');

const server = express();

// server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((_req: ExpressRequest, res: ExpressResponse, next:NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

server.use((err: any, _req: ExpressRequest, res: ExpressResponse, _next: NextFunction) => {
  const status: number = err.status || 500;
  const message: string = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
