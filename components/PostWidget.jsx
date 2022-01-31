import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
           getSimilarPosts(categories, slug)
            .then((result) => setRelatedPosts(result))
        }else {
            getRecentPosts()
            .then((result) => setRelatedPosts(result))
        }
    }, [slug])


    return (
        <div className="bg-neutral-800 shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-neutral-100 text-xl mb-8 font-semibold border-b pb-4 border-neutral-700">
                {slug ? 'Related Post' : "Recent Posts"}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className="text-neutral-500 flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                        <img
                            className="aling-middle rounded-full"
                            src={post.featuredImage.url}
                            height="60px"
                            width="60px"
                            alt={post.title}
                        />
                    </div>
                    <div className="flex-grow ml-4 hover:text-neutral-100 duration-200">
                        <p className="text-neutral-300 font-xs ">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget