import React from 'react'
import { useContext } from 'react'
import Post from './Post'
import { listItemProvider } from '../store/Post-List-Context'

const PostList = () => {

    const { postList } = useContext(listItemProvider);

    return (
        <>
            {postList.length === 0 && <p className="text-center text-capitalize fw-medium p-5">Sorry no post is there to show</p>}
            <div className="post-container">
                {postList.map((postData) => (
                    <Post postData={postData} key={postData.id} />
                ))}
            </div>
        </>
    )
}

export default PostList