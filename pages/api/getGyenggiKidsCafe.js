// pages/api/getGyenggiKidsCafe.js
// 경기도 키즈카페 fetch
import { parseStringPromise } from "xml2js";

export default async function getTotalGyeonggiKidsCafe(req, res) {
  const GYENGGI_KIDSCAFE_URI = process.env.NEXT_PUBLIC_NCP_GYENGGI_ID;

  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://openapi.gg.go.kr/Kidscafe?KEY=${GYENGGI_KIDSCAFE_URI}&pIndex=1&pSize=300`
      );
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
