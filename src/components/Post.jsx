import React, { useContext, useRef } from 'react'
import { MdDelete } from "react-icons/md";
import { listItemProvider } from '../store/Post-List-Context';

const Post = ({ postData }) => {

    const { deleteItem, handleReactionClick } = useContext(listItemProvider);
    let reactionsIncreament = useRef(0);

    return (
        <div className="card postListCard" style={{ width: "22rem" }}>
            <div className="card-body">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deleteButton" style={{ width: "40px", height: "40px", alignItems: 'center' }} onClick={() => deleteItem(postData.id)}>
                    <span style={{ fontSize: "24px" }}>
                        <MdDelete />
                    </span>
                </span>

                <h5 className="card-title">{postData.title}</h5>

                <p className="card-text">{postData.body}</p>

                <button type="button" className="btn btn-light postButton" onClick={() => {
                    reactionsIncreament.current = reactionsIncreament.current + 1;
                    handleReactionClick(postData.id, reactionsIncreament.current);
                }}>
                    😜 <span className="badge text-dark">{postData.reactions !== 0 ? postData.reactions : ""}</span>
                </button>

                <p>
                    {
                        postData.tags.map((tag) => (
                            <span style={{margin : "0px 5px"}} key={tag}>#{tag}</span>
                        ))
                    }
                </p>

            </div>
        </div>
    )
}

export default Post