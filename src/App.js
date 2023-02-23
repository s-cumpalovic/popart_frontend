import { useState, useEffect } from "react";
import { postsService } from "./services/PostsService";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    handleGetPosts();
  }, [posts]);

  const handleGetPosts = async () => {
    const posts = await postsService.getPosts();
    console.log(posts);
  };

  return <div>Hello</div>;
}

export default App;
