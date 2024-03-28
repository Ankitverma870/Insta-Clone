import React, { useState } from 'react';
import { Card, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';

const InstagramPost = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleCommentClick = () => {
    // Implement your logic for handling comments
    setCommentsCount(commentsCount + 1);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h2">
          User Name
        </Typography>
        {/* Image */}
        <Typography variant="body1" component="p">
          Caption for the post goes here.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="like" onClick={handleLikeClick}>
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography>{likesCount} Likes</Typography>
        <IconButton aria-label="comment" onClick={handleCommentClick}>
          <ChatIcon />
        </IconButton>
        <Typography>{commentsCount} Comments</Typography>
      </CardActions>
    </Card>
  );
};

export default InstagramPost;
