import {useRef} from 'react'
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const contentInputRef = useRef();


    function submitHandler (event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredContent = contentInputRef.current.value;

        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredContent,
        }

        props.onAddMeetup(meetUpData);
    }


  return (
    <Card>
      <form action="" onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">MeetUp Image URL</label>
          <input type="url" id="image" ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">MeetUp Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="content">MeetUp Message</label>
          <textarea name="content" id="content" ref={contentInputRef} rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
