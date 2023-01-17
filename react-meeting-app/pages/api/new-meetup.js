// /api/new-meetup

import { mongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;

        const client = await mongoClient.connect("mongodb+srv://CondorAwful:qun3N8pruHGiC!g@cluster0.lmtp6.mongodb.net/meetups?retryWrites=true&w=majority");

        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne({ data });

        console.log(result);

        client.close();

        res.status(201).json({ message: "Successfully inserted" });
    }
};

export default handler;