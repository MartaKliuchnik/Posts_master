import { useState } from "react";
import { posts_data } from "../data/posts";
import PostsContainer from "../PostsContainer";
import { Context } from '../context';

function App() {
  const [ posts, setPosts ] = useState(posts_data);

  return (
    <Context.Provider value={{posts}}>
      <PostsContainer/>
    </Context.Provider>
  );
}

export default App;
