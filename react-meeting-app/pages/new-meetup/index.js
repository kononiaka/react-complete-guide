import NewMeetupForm from './../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    const onAddMeetupHandler = (addedData) => {
        console.log(addedData);
    };
    return (<NewMeetupForm onAddMeetup={onAddMeetupHandler} />);
};

export default NewMeetup;