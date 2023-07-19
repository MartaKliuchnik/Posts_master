import { useState } from "react";
import { posts_data } from "../data/posts";
import PostsContainer from "../PostsContainer";
import { Context } from '../context';
import AddPostForm from '../AddPostForm';

function App() {
	const [posts, setPosts] = useState(posts_data);
	
	const changeLike = (id) => {
		setPosts(posts.map(post => {
			return post.id === id ? { ...post, like: !post.like } : post
		}))
	};

	const createNewPost = ({ title, text }) => {
		setPosts([...posts, {
			id: Date.now(),
			text,
			title
		}])
	}

	return (
		<Context.Provider
			value={{
				posts,
				changeLike,
				createNewPost,
			}}
		>
			<AddPostForm />
			<PostsContainer />
		</Context.Provider>
	);
}

export default App;
