import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BlogParts from './BlogParts';

const blog_posts = gql `
    query GET_POSTS {
        posts {
            edges {
                node {
                    id
                    title
                    date
                    excerpt
                }
            }
        }
    }
`;

class Blog extends Component {
    render(){
        return (
           <Fragment>
            <div className="blog">
                <Query query={blog_posts}>
                    {
                        ({loading,  error, data}) => {
                            if(loading) return (
                                <div className="loading">
                                    Loading
                                </div>
                            );

                            if(error) console.log(error);
                            
                            let postArray =  data.posts.edges;
                            // console.log(postArray)
                            return <Fragment>
                                {
                                   postArray.map(post => (
                                        <BlogParts key={post.node.id} post={post.node}/>
                                   ))
                                } 
                            </Fragment>
                            ;
                        }
                    } 
                </Query>
            </div>
           </Fragment>
        )
    }
}

export default Blog;