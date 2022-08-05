/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { dirname, join } from "path";

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const frontPath = dirname(require.resolve('../../front/project.json'))
const front2Path = dirname(require.resolve('../../front2/project.json'))

const frontBuiltFilesPath = `${frontPath}/build`
const front2BuiltFilesPath = `${front2Path}/build`

console.log('test')
const serveFront = (app: express.Express) => {
  app.use('/', express.static(frontBuiltFilesPath))

  app.get('/*', function (req, res) {
    res.sendFile(join(frontBuiltFilesPath, 'index.html'));
  });
}

const serveFront2 = (app: express.Express) => {
  app.use('/front2', express.static(front2BuiltFilesPath))

  app.get('/front2*', function (req, res) {
    res.sendFile(join(front2BuiltFilesPath, 'index.html'));
  });
}

serveFront(app)
serveFront2(app)

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
