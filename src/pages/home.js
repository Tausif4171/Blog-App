import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';

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

        </div>
    );
}

export default Home;