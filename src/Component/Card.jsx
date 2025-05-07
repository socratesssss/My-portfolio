import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function ActionAreaCard({image,name,link}) {

  return (
    <Card sx={{ maxWidth: 345 }}
  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent className='dark:bg-gray-800 border-b dark:border-gray-600 border-gray-200'>
          <Typography gutterBottom variant="h5" className='dark:text-white' component="div">
          {name}
          </Typography>
          <Typography variant="body2" className='line-clamp-2 dark:text-white'>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, voluptatum!
          </Typography>
        </CardContent>
      </CardActionArea>
      

      <CardActions className='dark:bg-gray-800'>
        <Button size="small"   target="_blank"     component="a" href={link}>Live Demo</Button>
      </CardActions>
   
     
    </Card>
  );
}