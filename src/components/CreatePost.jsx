import React, { useContext, useRef } from 'react'
import { listItemProvider } from '../store/Post-List-Context';
import { useNavigate } from 'react-router-dom';
import { SelectedTabContext } from '../store/SelectedTab-Context';

const CreatePost = () => {

    const { addItem } = useContext(listItemProvider);
    const { setSelectedTab } = useContext(SelectedTabContext);
    const navigate = useNavigate();

    const userId = useRef(null);
    const title = useRef(null);
    const content = useRef(null);
    const tags = useRef(null);

    const handleSubmit = (event) => {

        event.preventDefault();
        
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title : title.current.value,
                body : content.current.value,
                reactions : 0,
                userId : userId.current.value,
                tags : tags.current.value.split(" ")
            })
        })
        .then(res => res.json())
        .then((newPost) => {
            addItem(newPost);
            title.current.value = "";
            content.current.value = "";
            userId.current.value = "";
            tags.current.value = "";
            navigate("/post-list");
            setSelectedTab("Home");
        });
    }

    return (
        <>
            <form className='postForm' onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input ref={userId} type="number" className="form-control" id="userId" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input ref={title} type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Your Thoughts</label>
                    <textarea ref={content} className="form-control" id="content" rows="4" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Your Tags</label>
                    <input ref={tags} type="text" className="form-control" id="tags" />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>

        </>

    )
}

export default CreatePost