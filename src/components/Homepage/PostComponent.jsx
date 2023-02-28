import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link } from "@mui/material";

const PostComponent = ({ ...post }) => {
  const {
    id,
    title,
    description,
    price,
    state,
    image_url,
    contact,
    location,
    category,
  } = post;
  return (
    <div className="posts-container">
      {" "}
      <div className="card-image">
        {/* All Movies components */}
        <>{console.log(post)}</>

        <Card key={id}>
          <CardActionArea>
            <CardMedia
              height={300}
              component="img"
              image={image_url}
              sx={{
                boxShadow: 1,
                padding: 3,
                marginRight: 2,
                width: 300,
                height: 300,
              }}
            />
            <CardContent>
              <Link href={`/posts/${id}`}>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography>Price: {price}</Typography>
              <Typography>State: {state}</Typography>
              <Typography>Location: {location}</Typography>
              <Typography>Contact: {contact}</Typography>
              <Typography>Category: {category.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default PostComponent;
