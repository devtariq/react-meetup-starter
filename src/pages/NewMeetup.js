import {useHistory} from 'react-router-dom'

import NewMeetupForm from "../componenents/meetup/NewMeetupForm";

function NewMeetUpPages() {
  const history = useHistory();
  function addMeetupHandler (meetUpData) {
    fetch('https://first-react-fdf6c-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetUpData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then( () => {
       history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New meetaup </h1>
      <NewMeetupForm onAddMeetup = { addMeetupHandler }/>
    </section>
  );
}

export default NewMeetUpPages;
