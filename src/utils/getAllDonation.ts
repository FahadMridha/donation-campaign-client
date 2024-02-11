export const getAllDonations = async () =>{
    const  res = await fetch(`${process.env.BACKEND_URL}/donation`,{
        cache:"no-store"
    })
    return res.json()
}