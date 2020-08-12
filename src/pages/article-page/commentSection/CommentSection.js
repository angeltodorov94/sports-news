import React from 'react'
import Comment from '../../../components/comment/Comment'

const CommentSection = ({ comments }) => {
    const renderComments = () => {
        return comments.map(x => <Comment key={x._id} data={x} />)
    }

    return (
        <div>
            {renderComments()}
        </div>
    )
}

export default CommentSection