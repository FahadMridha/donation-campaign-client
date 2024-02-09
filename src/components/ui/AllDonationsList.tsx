import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { getAllDonations } from '@/utils/getAllDonation';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default async function AllDonationsList () {
 const { data : allDonations} = await getAllDonations()
 console.log(allDonations);

  return (
<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
{
    allDonations.map((donation: { _id: React.Key | null | undefined; picture: string | StaticImport; category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) =>
    <Card key={donation._id} sx={{ display: 'flex' }}>

    <Image
      width={151}
      height={150}
      src={donation.picture}
      alt="Live from space album cover"
    />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
         {donation.category}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {donation.title}
        </Typography>
        <Link href={`/donation/${donation._id}`}>
                            <button className="btn btn-primary">See Detail</button>
                            </Link>
      </CardContent>
    </Box>
  </Card>)
}
</div>
  );
}
