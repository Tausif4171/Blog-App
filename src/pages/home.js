import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { Card, Button } from 'react-bootstrap';

function Home(props) {
    const [postList, setPostList] = useState([]);
    const getCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(getCollectionRef);

            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // we have created a new array(useful data) using map function 
            // because in data array there are lot of data...

        }
        getPosts();
    }, []);

    return (
        <div>
            <h1>{postList.map((post) => {
                return (
                    <div className='container'>
                        {/* <h1>{post.title}</h1>
                        <h3>{post.post}</h3>
                        <h6>@{post.author.name}</h6> */}
                        <br />
                        <Card style={{ width: '18rem' }}>
                           
                            <Card.Body>
                                <Card.Title><h3>{post.title}</h3></Card.Title>
                                <Card.Text>
                                <h5>{post.post}</h5>
                                </Card.Text>
                                <Card.Text>
                                <h6>@{post.author.name}</h6>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}</h1>
        </div>
    );
}

export default Home;