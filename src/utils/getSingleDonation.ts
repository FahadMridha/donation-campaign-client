export const getSingleDonation = async(id: any) =>{
    const res = await fetch(`${process.env.BACKEND_URL}/donation/${id}`,{
        cache:"no-store"
    })
    return res.json()
}