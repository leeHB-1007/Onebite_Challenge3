import { memo } from "react";
import "./ContactItem.css";
import { useContext } from "react";
import { DispatchContext } from "../App";

function ContactItem({ id, name, contact, }) {
    const { onRemoveContact} = useContext(DispatchContext)
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onRemoveContact(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
