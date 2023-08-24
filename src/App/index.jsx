import { useState, useEffect } from "react";
import { posts_data } from "../data/posts";
import PostsContainer from "../PostsContainer";
import { Context } from '../context';
import AddPostForm from '../AddPostForm';
import '../style.css';

function App() {
	const [posts, setPosts] = useState(posts_data);
	
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('posts'));
		if (res) setPosts(res);
	}, []);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts])

	
	const changeLike = (id) => {
		setPosts(posts.map(post => {
			return post.id === id ? { ...post, like: !post.like } : post
		}))
	};

	const createNewPost = ({ title, text }) => {
		setPosts([...posts, {
			id: Date.now(),
			text,
			title,
			like: false,
			comments: []
		}])
	};

	const deleteChosenPost = (idChosenPost) => {
		setPosts([...posts.filter(post => post.id !== idChosenPost)]);
	};

	const addNewComment = ({ idPost, comment }) => {
		setPosts((prevPosts) => {
			return prevPosts.map(post => {
				if (post.id === idPost) {
					const updatedComments = [...post.comments,
					{
						id: Date.now(),
						comment
					}
					];
					return { ...post, comments: updatedComments }
				}
				return post
			})
		})
	}

	return (
		<Context.Provider
			value={{
				posts,
				changeLike,
				createNewPost,
				addNewComment,
				deleteChosenPost,
			}}
		>
			<AddPostForm />
			<PostsContainer />
		</Context.Provider>
	);
}

export default App;
