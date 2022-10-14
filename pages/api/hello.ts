// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
    console.log('Passei aqui 1')
    try {
    const jwLink: any = req.query.link || '';
    const jwURL = 'https://www.jw.org/'+decodeURIComponent(jwLink);

    console.log('Passei aqui 2')

    // const jwHTML = await axios.get(jwURL).then(response => response.data);

    console.log('Passei aqui 3')

    res.status(200).json({html: 'p', url: jwURL});
  } catch (error) {
    console.log(error)
    res.status(404).end(null);
  }
};