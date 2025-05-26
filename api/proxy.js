export default async function handler(req, res) {
  const { url, ...params } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  const queryString = new URLSearchParams(params).toString();
  const targetUrl = `http://testjob.checkport.ru${url}${queryString ? `?${queryString}` : ''}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: 'testjob.checkport.ru',
      },
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy failed', details: String(error) });
  }
}
