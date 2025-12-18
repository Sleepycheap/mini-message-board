import express from 'express';
import {join} from 'node:path';
import { allowedNodeEnvironmentFlags } from 'node:process';
import {fileURLToPath} from 'node:url';
import indexRouter from './routers/indexRouter.js';

const dirname = fileURLToPath(new URL('.', import.meta.url));
const filepath = join(dirname, 'views');

const app = express();
app.set('views', filepath);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}))

const port = 8000;

app.use('/', indexRouter);

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`MMB is listening on port: ${port}`);
});
