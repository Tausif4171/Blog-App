import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    return (
        <div className='container' style={{marginTop:24}}>

        <div>
            <h1>Create a Post</h1>
            <div>
                <label>Title</label><br />
                <input placeholder='Enter your title...' onChange={(e) =>{
                   setTitle(e.target.value);
                }} />
            </div><br />
            <div>
                <label>Post</label><br />
                <textarea placeholder='Enter your Post...' onChange={(e) =>{
                   setPost(e.target.value);
                }}/>
            </div>
        </div>
        
        <div>
            <button>Submit Post</button>
        </div>

        </div>
    );
};

export default CreatePost;