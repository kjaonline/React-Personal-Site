import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const blog_info = gql `
query GET_POST ($postid: ID!){
	post(id: $postid) {
			content
			date
			}
		}
`;

class BlogSingle extends Component {
	componentDidUpdate(){
		console.log('urlParam :' + this.props.match.params.id)
	}
	render(){
			return (
				<div className="blogSingle">
					<Query query={blog_info} variables={{
						postid: this.props.match.params.id
					}}>
						{
							({loading, error,data}) =>{
								if(loading) return('loading')
								if(error) console.log('error')
								// console.log(data)
								return data.post.content
							}
						}
					</Query>
					test
				</div>
			)
	}
	
}

export default withRouter(BlogSingle)