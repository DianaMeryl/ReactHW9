import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { data }  from '../helpers/data'

export default function Home() {

return (
    <div style={{display:'flex', flexWrap:"wrap", gap:"20px", padding:"20px 55px"}}> 
            {data.map(item => (
        <Card key={item.id} sx={{ maxWidth: 350 }} >
        <CardMedia
            sx={{ height: 270}}
            image={item.image}
            title={item.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.descrioption}
            </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        </CardActions>
        </Card>    
    )) }
    </div>
)}
