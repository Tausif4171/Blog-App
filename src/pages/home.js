import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import { Card } from 'react-bootstrap';


function Home(props) {
    const [postList, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    const postDelete = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);

            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // we have created a new array(useful data) using map function 
            // because in data array there are lot of data...
        }
        getPosts();
    }, [postDelete()]);


    return (
        <div>
            {postList.map((post) => {
                return (
                    <div className='container'>

                        <br />
                        <Card style={{ width: '24rem' }}>

                            <Card.Body>
                                <Card.Title>
                                    <h3>{post.title}</h3>
                                </Card.Title>
                                <div>
                                    {props.isAuth && post.author.id === auth.currentUser.uid && (
                                        <button onClick={() => {
                                            postDelete(post.id);
                                        }} style={{ backgroundColor: "white", border: "none" }}>&#128465;</button>)
                                    }
                                </div>

                                <Card.Text>
                                    <h5>{post.post}</h5>
                                </Card.Text>
                                <Card.Text>
                                    <h6>@{post.author.name}</h6>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;