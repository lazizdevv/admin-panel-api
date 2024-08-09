// api/json-server.js
import { createServer, Model } from 'json-server';
import fs from 'fs';
import path from 'path';

const server = createServer();
const router = createRouter();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});

function createRouter() {
  const filePath = path.resolve('.', 'db.json');
  const db = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return jsonServer.router(db);
}
