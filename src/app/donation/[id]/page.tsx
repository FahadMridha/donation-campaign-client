import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getSingleDonation } from '@/utils/getSingleDonation';
import Image from 'next/image';
import { handleButtonClick } from '@/utils/toast';
export default async function DonationDetailPage({params}:any) {
    const {data} = await getSingleDonation(params.id)
    // console.log(data);

  
  return (
   <div className='flex justify-center mt-10 lg:mt-20'>
     <Card sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{
            "& img": {
              width: "100%",
              height: "250px",
            },
          }}
        >
          <Image
            src={data.picture}
            height={100}
            width={800}
            alt="topNews"
          />
          </CardMedia>
          <CardActions>
        <Button 
        onClick={handleButtonClick}
        variant="outlined" color="error" size="small">Donate $ {data.amount}</Button>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
   </div>
  );
}