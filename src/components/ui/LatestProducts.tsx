 import { getAllDonations } from '@/utils/getAllDonation';
 import { getCardColorDependOnTitle } from '@/utils/getCardDiffColor';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 
 const LatestProducts =async () => {
    const { data: allDonations } = await getAllDonations();
//   console.log(allDonations);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-20">
        {allDonations.map(
          (donation: any) => (
            <Card key={donation._id} sx={{ display: "flex" ,bgcolor: getCardColorDependOnTitle(donation.category)}} >
              <Image
                width={151}
                height={150}
                src={donation.picture}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {donation.category}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {donation.title}
                  </Typography>
                  <Link href={`/donation/${donation._id}`}>
                    <Button variant="outlined">See Detail</Button>
                  </Link>
                </CardContent>
              </Box>
            </Card>
          )
        )}
      </div>
    );
 };
 
 export default LatestProducts;