import React from 'react';
import {
    Link
} from "react-router-dom";

export default function BlogParts({ post: { date, id, title, excerpt, featuredImage}}) {
	let singleID = '/blog/' + id;
    return (
	<Link to={singleID} >
			<div className="postPrev">
					<img alt="yo" src={featuredImage.sourceUrl} />
					<div className="postInfo">
						<div className="postHeader">
							<h2>{ title }</h2>
							<span className="date">{ date }</span>
						</div>
						<div className="excerpt">
							{ excerpt } 
						</div>
						
					</div>
			</div>
		</Link>
    )
}
