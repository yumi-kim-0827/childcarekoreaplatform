// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getKdList(req, res) {
  const KD_URI = process.env.NEXT_PUBLIC_IP_KD_URI;

  if (req.method === "GET") {
    try {
      const response = await fetch(`${KD_URI}&arcode=26140`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
