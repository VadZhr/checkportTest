export default async function handler(req, res) {
  const targetUrl = `http://testjob.checkport.ru${req.url?.replace('/api/proxy', '')}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: 'testjob.checkport.ru',
      },
      body: req.method !== 'GET' && req.body ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.text();

    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy failed', details: String(error) });
  }
}
