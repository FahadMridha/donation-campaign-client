import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getAllDonations } from "@/utils/getAllDonation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { getCardColorDependOnTitle } from "@/utils/getCardDiffColor";

export default async function AllDonationsList() {
  const { data: allDonations } = await getAllDonations();
  // console.log(allDonations);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {allDonations.map(
        (donation: any) => (
          <Card key={donation._id} sx={{ display: "flex" ,bgcolor: getCardColorDependOnTitle(donation.category), }} >
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
}
