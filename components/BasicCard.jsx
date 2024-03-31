// BasicCard.jsx

// Add the "use client" pragma at the top of the file
'use client';

import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageUpload from '../components/imageupload';
import Avatar from '@mui/material/Avatar'; 
// import io from 'socket.io-client';

const CenteredCard = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      
      <Card sx={{ maxWidth: 345 }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
          <Avatar sx={{ width: 32, height: 32, marginRight: '0.5rem' }}>A</Avatar>
          <Typography variant="h6">Ankit</Typography>
        </div>
        <CardMedia
          sx={{ height: 50 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        
        <ImageUpload />
        <CardContent>
        
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleLikeClick}>Like ({likes})</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CenteredCard;
