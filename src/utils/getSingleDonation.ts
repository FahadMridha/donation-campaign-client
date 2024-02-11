export const getSingleDonation = async(id: any) =>{
    const res = await fetch(`http://localhost:5000/api/v1/donation/${id}`,{
        cache:"no-store"
    })
    return res.json()
}