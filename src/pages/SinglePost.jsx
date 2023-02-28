import React from "react";
import PostComponent from "../components/Homepage/PostComponent";
import { useQuery } from "react-query";
import Loader from "../components/helpers/Loader";
import { postsService } from "../services/PostsService";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SinglePost = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["movie"],
    () => {
      if(id) {
        return postsService.getOnePost(id);
      }
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

  console.log(data);
  const post = data;

  return <PostComponent {...post} />;
};

export default SinglePost;
