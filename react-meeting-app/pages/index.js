import MeetupList from './../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: 'https://randompicturegenerator.com/img/national-park-generator/ged4a87053c3da47721249ae18a64f6a86bc93aa983668c9c8c0315e5bb1711cf07db98b44f1a08fd3db2d1499ebdc76e_640.jpg',
        title: 'A First Meetup',
        address: 'Some address 5, 12345, Some City',
        description: 'This is the first meetup.'
    },
    {
        id: 'm2',
        image: 'https://randompicturegenerator.com/img/national-park-generator/g9a6542f4d0ccf6052e5c2094302e1e425e51bc6a1d5c26041af3a824bedb0b9f8a5f7784eebc7861d082772456bcf0fa_640.jpg',
        title: 'A Second Meetup',
        address: 'Some address 5, 12345, Some City',
        description: 'This is the second meetup.'
    }
];

const HomePage = () => {
    return (<MeetupList meetups={DUMMY_MEETUPS} />);
};

export default HomePage;