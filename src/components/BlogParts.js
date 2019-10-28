import React from 'react';
import {
    Link
} from "react-router-dom";

export default function BlogParts({ post: { date, id, title, excerpt}}) {
    console.log(id)
    return (
        <div className="postPrev">
                <h2>{ title }</h2>
                <span>{ date }</span>
                <div className="excerpt">
                    { excerpt }
                </div>
                <Link to='/post'> { id }</Link>
        </div>
    )
}
