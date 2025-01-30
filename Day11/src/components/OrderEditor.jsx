import { useState } from "react";

const OrderEditor = () => {
  const [menu, setMenu] = useState("족발");
  const [add, setAdd] = useState("");
  const [req, setReq] = useState("");

  const onChangeMenu = (e) => {
    setMenu(e.target.value);
  };

  const onChangeAdd = (e) => {
    setAdd(e.target.value);
  };

  const onChangeReq = (e) => {
    setReq(e.target.value);
  };

  const onSubmit = () => {
    alert(
      `주문이 완료!! 메뉴는 ${menu}, 주소는 ${add}, 요청사항 ${req} 입니다!`
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          value={menu}
          onChange={onChangeMenu}
          style={{ width: 300, padding: 5 }}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          value={add}
          onChange={onChangeAdd}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달시 요청사항
        </div>
        <textarea
          value={req}
          onChange={onChangeReq}
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항 입니다."
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;