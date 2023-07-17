import { useState } from "react";
import { posts_data } from "../data/posts";
import PostsContainer from "../PostsContainer";
import { Context } from '../context';

function App() {
  const [posts, setPosts] = useState(posts_data);
  
  const changeLike = (id) => {
    setPosts(posts.map(post => {
      return post.id === id ? { ...post, like: !post.like } : post
    }))
  }

  return (
		<Context.Provider
			value={{
				posts,
				changeLike,
			}}
		>
			<PostsContainer />
		</Context.Provider>
	);
}

export default App;
