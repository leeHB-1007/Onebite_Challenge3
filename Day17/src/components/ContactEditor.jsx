import { useContext } from "react";
import "./ContactEditor.css";
import { useState, memo } from "react";
import { DispatchContext } from "../App";
function ContactEditor() {
    const { onPlusContact } = useContext(DispatchContext)
  const [info, setInfo] = useState({
    name: "",
    contact: "",
  });
  const onChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    if (info.name === "" || info.contact === "") {
      alert("이름 또는 연락처가 비어있습니다. 다시 확인해주세요");
      return;
    }
    onPlusContact(info.name, info.contact);
    setState({
      name: "",
      contact: "",
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          className="name"
          placeholder="이름 ..."
          value={info.name}
          onChange={onChangeInfo}
          name="name"
        />
        <input
          className="contact"
          placeholder="연락처(이메일) ..."
          value={info.contact}
          onChange={onChangeInfo}
          name="contact"
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);