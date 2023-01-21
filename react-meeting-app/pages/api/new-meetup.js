// /api/new-meetup

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body;
        console.log('data', data);

        const client = await MongoClient.connect("mongodb+srv://CondorAwful:qun3N8pruHGiC!g@cluster0.ecefcy2.mongodb.net/meetups?retryWrites=true&w=majority");

        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
};

export default handler;

