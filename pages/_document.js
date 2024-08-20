import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta
          name="description"
          content="전국 서울 경기 어린이집 / 유치원 정보 찾기 조회 - 유아식 식단 레시피, 육아 정보, 청소년 활동 정보 조회 사이트"
        />
        <meta
          property="og:title"
          content="서울 경기 전국 어린이집/유치원 찾기 - 육아 케어, 레시피, 청소년 활동 정보 조회"
        />
        <meta property="og:description" content="Your site description here" />
        <meta property="og:image" content="/img/op_img.jpg" />
        <meta property="og:url" content="https://www.childcareportal.co.kr/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-adsense-account"
          content="ca-pub-9192184133511809"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
