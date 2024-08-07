import React, { useEffect } from "react";
import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";

const Map = ({ style }) => {
  const NV_CLIENT_ID = process.env.NEXT_PUBLIC_NCP_CLIENT_ID;

  useEffect(() => {
    const script = document.createElement("script"); //js문법으로 스크립트 노드 생성
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NV_CLIENT_ID}`;
    script.async = true; //스크립트를 비동기로 처리 : HTML 파싱과 스크립트 로드가 동시에 진행
    document.head.appendChild(script); //script 추가
    return () => {
      document.head.removeChild(script); // 컴포넌트 언마운트 시 스크립트 제거
    };
  }, []);
  return (
    <>
      <div id="map">
        <MapDiv style={style}>
          <NaverMap>
            <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
          </NaverMap>
        </MapDiv>
      </div>
    </>
  );
};

export default Map;
