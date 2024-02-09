import { getSingleDonation } from '@/utils/getSingleDonation';
import React from 'react';

const DonationDetailPage =async ({params}: any) => {
    console.log(params.id);
    const {data} = await getSingleDonation(`http://localhost:5000/api/v1/donation/${params.id}`)
    console.log(data);
    return (
        <div>
            <h2>Detail donation</h2>
        </div>
    );
};

export default DonationDetailPage;