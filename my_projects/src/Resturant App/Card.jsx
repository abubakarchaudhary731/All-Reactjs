import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MediaCard({data}) {
  return (
    <>
    {
      data.map((item) => {
        return(
          <div className='d-inline-flex p-3 row flex-column' key={item.id}>
          <div className='col ms-5'>
      <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 240 }}
        image={item.image}
        title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div"> {item.name} </Typography>
        <Typography variant="body2" color="text.secondary"> {item.description} </Typography>
      </CardContent>

      <CardActions>
        <Button size="small"> Order Now </Button>
      </CardActions>
    </Card>
    </div>
    </div>
      )})
    }
  </>
  );
}