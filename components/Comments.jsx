import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
import { comment } from 'postcss'

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result))
    }, [])

    return (
        <>
            {comment.length > 0 && (
                <div className="bg-neutral-800 shadow-lg rounded-lg p-8 pb-12 mb-8 ">
                    <h3 className="text-xl text-neutral-100 mb-8 font-semibold border-b border-neutral-700 pb-4">
                        {comments.length}
                        {' '}
                        Comments
                    </h3>
                    {comments.map((comment) => (
                        <div key={comment.createdAt} className="border-b mb-4 border-neutral-700 pb-4 text-neutral-300">
                            <p className="mb-4">
                                <span className="font-semibold">{comment.name}</span>
                                {' '}
                                on
                                {' '}
                                {moment(comment.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <p className="whitespace-pre-line text-grey-600 w-full text-neutral-400">{parse(comment.comment)}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments
