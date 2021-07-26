import { useState, useEffect } from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase'

function Feed() {
    const[input, setInput] = useState("");
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        console.log('Run useEffect')

        // the below is real time a listener, that when a post is created on database it is pushed onto post state
        const unsubscribe = db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
            console.log('New snapshot')

     
            const newDocs = snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                    date: new Date(),
                }
            ))
            console.log('New snapshot docs', newDocs)
            setPosts(newDocs)
        })
        return () => {
            console.log('Running clean up to avoid memory leak');
            unsubscribe()}
    }, [])


    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Akshar PATEL',
            decsription: 'this da test',
            message: input, 
            photoURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });

        setInput("");
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/>
                </div>
            </div>


            {posts.map(({ id, data: { name, description, message, photoURL} }) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}ß
                photoURL={photoURL}
                />
            ))}

        </div>
    )
}

export default Feed
