// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "@libs/connectDB"

export default async (req, res) => {
  try {
    await dbConnect();
    res.status(200).json({ message: 'DB connection established' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
