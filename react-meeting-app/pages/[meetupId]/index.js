import MeetupDetail from './../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
    return (<MeetupDetail
        image="https://randompicturegenerator.com/img/national-park-generator/ged4a87053c3da47721249ae18a64f6a86bc93aa983668c9c8c0315e5bb1711cf07db98b44f1a08fd3db2d1499ebdc76e_640.jpg"
        title="The First Meetup"
        address="Some Address 5, Some City"
        description="Some description"
    />);
};

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } },
        ]
    };
};

export const getStaticProps = (context) => {
    const meetupId = context.params.meetupId;

    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: 'm1',
                image: "https://randompicturegenerator.com/img/national-park-generator/ged4a87053c3da47721249ae18a64f6a86bc93aa983668c9c8c0315e5bb1711cf07db98b44f1a08fd3db2d1499ebdc76e_640.jpg",
                title: "The First Meetup",
                address: "Some Address 5, Some City",
                description: "Some description"
            }
        }
    };
};

export default MeetupDetails;