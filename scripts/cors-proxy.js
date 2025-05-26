import cors_proxy from 'cors-anywhere'

const host = 'localhost';
const port = 8080;

cors_proxy.createServer({
  originWhitelist: [],
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`🟢 CORS Anywhere proxy running at http://${host}:${port}/`);
});