import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CustomTable = ({ data }) => {
  //data value 함수 추출
  const getValue = (field) => {
    return data.data[field] && data.data[field].length > 0
      ? data.data[field]
      : "지도 상에서 마커를 선택하세요";
  };

  const getGeoCodeValue = (field) => {
    return data.data.geocodeResult && data.data.geocodeResult[field].length > 0
      ? data.data.geocodeResult[field]
      : "지도 상에서 마커를 선택하세요";
  };
  //선택한 어린이집 객체 가공
  const datas = [
    { label: "이름", value: getValue("crname") },
    { label: "정원", value: getValue("crcapat") },
    { label: "주소", value: getGeoCodeValue("jibunAddress") },
    { label: "도로명 주소", value: getGeoCodeValue("roadAddress") },
    { label: "전화번호", value: getValue("crtel") },
    { label: "팩스", value: getValue("crfax") },
    { label: "홈페이지", value: getValue("crhome") },
  ];

  // Product 객체가 유효한지 확인
  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="custom-tabel-wrap">
        <div>
          <DataTable value={datas}>
            <Column
              field="label"
              header="기준"
              body={(rowData) => <strong>{rowData.label}</strong>}
            />
          </DataTable>
        </div>
        <div className="">
          <DataTable value={datas}>
            <Column field="value" header="값" />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default CustomTable;
