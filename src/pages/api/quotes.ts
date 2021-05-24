import database from "@middlewares/database";
import Quote from "@models/Quote";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { NextHandler } from "next-connect";

const handler = nextConnect();
handler.use(database);

handler.get(async (_1: NextApiRequest, res: NextApiResponse, _3: NextHandler) => {
    try {
        const quotes = await Quote.find({});
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default handler;