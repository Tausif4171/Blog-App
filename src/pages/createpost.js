import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = (props) => {
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");

    const postsCollectionRef = collection(db, "posts"); //posts -> our tablename in firebase
    let navigate = useNavigate();

    const createPost = async () => {
        await (addDoc(postsCollectionRef, {
            title,
            post,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
        }));
        navigate("/");
    }

    useEffect (()=>{
        if (!props.isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className='container' style={{ marginTop: 24 }}>

            <div>
                <h1>Create a Post</h1>
                <div>
                    <label>Title</label><br />
                    <input placeholder='Enter your title...' onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                </div><br />
                <div>
                    <label>Post</label><br />
                    <textarea placeholder='Enter your Post...' onChange={(e) => {
                        setPost(e.target.value);
                    }} />
                </div>
            </div>

            <div>
                <button onClick={createPost}>Submit Post</button>
            </div>

        </div>
    );
};

export default CreatePost;