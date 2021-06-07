import database from "@middlewares/database";
import Donation from "@models/Donation";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect, { NextHandler } from "next-connect";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const { method } = req;
//     await dbConnect();
//     switch (method) {
//         case "GET":
//             try {
//                 const donations = await Donation.find({}).sort('-createdAt').limit(5);
//                 res.status(200).json(donations);
//             } catch (error) {
//                 res.status(500).json({ message: error.message });
//             }
//             break;
//         case "POST":
//             try {
//                 const donation = new Donation(req.body);
//                 await donation.save();
//                 res.status(201).json(donation);
//             } catch (error) {
//                 res.status(500).json({ message: error.message });
//             }
//             break;
//         default:
//             break;
//     }
// }

const handler = nextConnect();
handler.use(database);

handler.get(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
        const donations = await Donation.find({}).sort('-createdAt').limit(5);
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

handler.post(async (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
        const donation = new Donation(JSON.parse(req.body));
        await donation.save();
        res.status(201).json(donation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default handler;