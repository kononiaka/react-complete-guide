import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from './../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>My Meetup App</title>
                <meta name="description" content="That's my first Next.js App"></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
};

// export const getServerSideProps = async (context) => {
//     // fetch data from DB/API
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// };

export const getStaticProps = async () => {
    //fetch data from DB/API

    const client = await MongoClient.connect("mongodb+srv://CondorAwful:qun3N8pruHGiC!g@cluster0.ecefcy2.mongodb.net/meetups?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
};

export default HomePage;