import React, { useState } from "react";
import { useQuery } from "react-query";
import { postsService } from "../services/PostsService";
import Loader from "../components/helpers/Loader";
import { useUser } from "../hooks/useAuth";
import PostComponent from "../components/Homepage/PostComponent";
import Pagination from "@mui/material/Pagination";
import SearchBar from "../components/Homepage/SearchBar";

const Homepage = () => {
  const [terms, setTerms] = useState({});
  const [page, setPage] = useState(1);
  const { user } = useUser();

  const { isLoading, isError, error, data } = useQuery(
    ["posts", page, terms],
    () => {
      return postsService.getPosts(page, {
        title: terms?.title,
        description: terms?.description,
        price_from: terms?.price_from,
        price_to: terms?.price_to,
        state: terms?.state,
        location: terms?.location,
        category_id: terms?.category_id,
      });
    },
    { refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  const handleSearch = (data) => {
    setTerms({
      title: data.title,
      description: data.description,
      price_from: data.price_from,
      price_to: data.price_to,
      state: data.state,
      location: data.location,
      category_id: data.category,
    });
  };

  const handlePagination = (value) => {
    setPage(value);
  };
  const posts = data.data;
  return (
    <div className="main-container">
      <div className="landing-page">
        <h1 className="landing-header">
          Pop - Up| Best marketplace website provided by PopArt Studio
        </h1>
      </div>
      <div className="search-bar">
        <SearchBar terms={terms} setTerms={setTerms} onSubmit={handleSearch} />
      </div>
      <div className="posts-container-main">
        <div className="posts-main">
          {posts.map((post) => {
            return <PostComponent key={post.id} {...post} />;
          })}
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          count={data.last_page}
          color="secondary"
          page={page}
          onChange={(event, value) => handlePagination(value)}
        />
      </div>
    </div>
  );
};

export default Homepage;
