import React from "react";
import { PostFormComponent } from "../components/New Post/PostForm";
import { postsService } from "../services/PostsService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from "react-query";
import { adminService } from "../services/AdminService";
import Loader from "../components/helpers/Loader";

const CreatePost = () => {
  const history = useHistory();

  const { isLoading, isError, error, data } = useQuery(
    ["categories"],
    () => {
      return adminService.getCategories();
    },
    {
      refetchOnWindowFocus: true,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return error;
  }

  const categories = data;

  const handleSubmit = async (data) => {
    try {
        console.log(data);
      await postsService.createPost(data);
      alert("Post creation success!");
      history.push("/posts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid-container">
      <div className="flex-container">
        <h1 className="landing-header">Create new post</h1>
      </div>
      <PostFormComponent
        onSubmit={handleSubmit}
        categories={data}
        isNewPost={true}
      />
    </div>
  );
};

export default CreatePost;
