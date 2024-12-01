import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../utils/db'; // Adjust path if necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const collection = db.collection('formSubmissions');

      const data = req.body; // Data from the form
      await collection.insertOne(data);

      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
      res.status(500).json({ error: 'Database error: ' + errorMessage });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}