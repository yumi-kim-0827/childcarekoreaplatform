// pages/api/getTotalKdList.js
// 전국 어린이집 fetch
import { parseStringPromise } from "xml2js";

export default async function getTotalKdList(req, res) {
  const KD_URI = process.env.NEXT_PUBLIC_IP_KD_URI;

  if (req.method === "GET") {
    const { arcode } = req.query; // 쿼리 파라미터에서 arcode 값을 가져옴
    try {
      const response = await fetch(`${KD_URI}&arcode=${arcode}`);

      // 응답의 Content-Type 헤더를 확인
      const contentType = response.headers.get("content-type");

      // 응답 본문을 텍스트 형태로 읽어옴
      const text = await response.text();

      // 응답의 Content-Type이 application/xml이 아니면 500 상태 코드 반환
      if (!contentType || !contentType.includes("application/xml")) {
        return res.status(500).json({ error: "Invalid response format" });
      }

      // XML 텍스트를 JavaScript 객체로 변환
      const data = await parseStringPromise(text);
      // 변환된 데이터를 JSON 형식으로 클라이언트 응답 보냄
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    // 만약 GET 메소드가 아닌 다른 메소드로 요청이 들어오면 405 상태 코드와 함께 오류 메시지 반환
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
