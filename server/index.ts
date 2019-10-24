import cors from 'cors';
import express from 'express';
import path from 'path';
import config from './config';
import { getHomeRouter } from './controllers/home';
import Db from './models/db';
// import Db from './models/pg';
const getAPIRouter = () =>
  express
    .Router({ mergeParams: true })
    .use(express.json({ limit: '10mb' }))
    .use('/home', getHomeRouter())

async function main() {
  await Db.init();
  const app = express()
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(cors())
    .use('/', express.static(path.join(__dirname, '../client/build')))
    .use('/api', getAPIRouter())
    .listen(config.port, () =>
      console.log(`listening on http://localhost:${config.port}`)
    );
  function stopServer() {
    console.log('stopping server');
    app.close();
  }
  process.once('SIGTERM', stopServer);
  process.once('SIGINT', stopServer);
}

main().catch((err) => console.error('app.init.failed', err));