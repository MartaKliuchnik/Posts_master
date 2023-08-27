import { useState, useEffect } from "react";
import { posts_data } from "../data/posts";
import PostsContainer from "../PostsContainer";
import { Context } from '../context';
import '../style.css';
import NavBar from "../NavBar";

function App() {
	const [posts, setPosts] = useState(posts_data);
	const [pictures, setPictures] = useState([]);
	
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem('posts'));
		if (res) setPosts(res);

		fetch(`https://picsum.photos/v2/list?page=1&limit=100`)
			.then((responce) => responce.json())
			.then((photos) => setPictures(photos));
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
		const randomId = Math.ceil(Math.random() * 100);
		console.log(randomId);

		const randomPhoto = pictures.find(({ id }) => +id === randomId);
		console.log(randomPhoto.download_url);

		setPosts([
			...posts,
			{
				id: Date.now(),
				text,
				title,
				like: false,
				photo: randomPhoto?.download_url,
				comments: [],
			},
		]);
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
	};

	const deleteChosenComment = (idCurrentPost, idChosenComment) => {
		setPosts((prevPosts) => {
			return prevPosts.map(post => {
				if (post.id === idCurrentPost) {
					const updatedComments = post.comments.filter(({ id }) => id !== idChosenComment);
					return {...post, comments: updatedComments}
				}
				return post
			})
		})
	};

	return (
		<Context.Provider
			value={{
				posts,
				changeLike,
				createNewPost,
				addNewComment,
				deleteChosenPost,
				deleteChosenComment
			}}
		>
			<NavBar/>
			<PostsContainer />
		</Context.Provider>
	);
}

export default App;
