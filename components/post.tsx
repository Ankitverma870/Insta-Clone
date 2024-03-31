'use client';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ImageUpload from './imageupload'
import TextField from '@mui/material/TextField';

const InstagramPost = () => {
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [isCommenting, setIsCommenting] = useState(false); 


    const handleLikeClick = () => {
      setLikes(likes + 1);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() !== '') {
            // setComments([...comments, comment]);
            setComment('');
        }
    };

    const handleCommentIconClick = () => {
        // Toggle the state to show/hide the comment input field
        setIsCommenting(!isCommenting);
    };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Card sx={{ maxWidth: 300, width: '100%', maxHeight: '800'}}>
        {/* Header section */}
        <CardHeader
          avatar={<Avatar src="/profile.jpg" alt="Profile" />}
          title="Username"
          subheader="Location"
        />
        <ImageUpload/>
        {/* Image section */}
        {/* <CardMedia
          component="img"
          image="/post-image.jpg"
          alt="Post"
        /> */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Caption 
          </Typography>
        </CardContent>
        <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {comments.map((comment, index) => (
                            <div key={index}>{comment}</div>
                        ))}
                    </Typography>
                </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like" onClick={handleLikeClick}>
            <FavoriteIcon />
          </IconButton>
          <Typography>{likes}</Typography>
          {isCommenting ? (
                        <div>
                            <TextField
                                label="Add a comment"
                                variant="outlined"
                                value={comment}
                                onChange={handleCommentChange}
                                fullWidth
                            />
                            <IconButton aria-label="submit-comment" onClick={handleCommentSubmit}>
                                <ChatIcon />
                            </IconButton>
                        </div>
                    ) : (
                        <IconButton aria-label="comment" onClick={handleCommentIconClick}>
                            <ChatIcon />
                        </IconButton>
                    )}
                </CardActions>
            </Card>
        </div>
    );
};

export default InstagramPost;
