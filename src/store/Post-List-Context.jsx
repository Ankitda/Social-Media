import { createContext, useReducer} from "react";
import SelectedTabContextProvider from "./SelectedTab-Context";

export const listItemProvider = createContext(
    {
        postList: [],
        addItem: () => { },
        deleteItem: () => { },
        handleReactionClick: () => { }
    }
);

const reducer = (currPostList, action) => {

    let newPostList = currPostList;

    if (action.type === "Delete_Action") {
        newPostList = currPostList.filter((postData) => postData.id !== action.payload.postId)
    } else if (action.type === "Add_Action") {
        newPostList = [action.payload.newPostCreated, ...currPostList]
    } else if (action.type === "ReactionClick_Action") {
        newPostList = currPostList.map((value) => {
            if (value.id === action.payload.postId) {
                value.reactions = action.payload.reactionsClicked;
            }
            return value;
        })
    }
    return newPostList;
}

const PostListItemProvider = ({ children, posts }) => {

    const [postList, dispatchPostListItem] = useReducer(reducer, posts);

    const addItem = (newPostCreated) => {

        dispatchPostListItem({
            type: "Add_Action",
            payload: {
                newPostCreated
            }
        })
    }

    const deleteItem = (postId) => {

        dispatchPostListItem({
            type: "Delete_Action",
            payload: {
                postId
            }
        });
    }

    const handleReactionClick = (postId, reactionsClicked) => {
        dispatchPostListItem({
            type: "ReactionClick_Action",
            payload: {
                postId,
                reactionsClicked
            }
        })
    }


    return (
        <listItemProvider.Provider value={
            {
                postList,
                addItem,
                deleteItem,
                handleReactionClick
            }
        } >
            <SelectedTabContextProvider>
                {children}
            </SelectedTabContextProvider>
        </listItemProvider.Provider>
    );


}

export default PostListItemProvider;