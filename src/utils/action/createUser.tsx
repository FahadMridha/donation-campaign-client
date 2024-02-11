"use server";

export const createUser = async (data: any) => {
  const res = await fetch(`${process.env.BACKEND_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const userInfo = await res.json();
    console.log(userInfo);
  return userInfo;
};