// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getKdList(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://api.childcare.go.kr/mediate/rest/cpmsapi021/cpmsapi021/request?key=f676f59b7fcb46debcb520ebea4b48f6&arcode=26140"
      );
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
