import dbConnect from "@libs/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

const database = async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
        await dbConnect();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    next();
}

export default database;