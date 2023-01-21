import MeetupDetail from './../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

const MeetupDetails = (props) => {
    return (<MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />);
};

export const getStaticPaths = async () => {

    const client = await MongoClient.connect("mongodb+srv://CondorAwful:qun3N8pruHGiC!g@cluster0.ecefcy2.mongodb.net/meetups?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } }))
    };
};

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId;
    // console.log(meetupId);

    const client = await MongoClient.connect("mongodb+srv://CondorAwful:qun3N8pruHGiC!g@cluster0.ecefcy2.mongodb.net/meetups?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
};

export default MeetupDetails;