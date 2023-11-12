import { mockHotels } from '@/core/mocks'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    res.status(200).json(mockHotels)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
