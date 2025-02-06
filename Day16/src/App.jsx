import { useCallback } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer } from "react";
import { useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
};
function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const onPlusContact = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);
  const onRemoveContact = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onPlusContact={onPlusContact} />
      </section>
      <section>
        <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
      </section>
    </div>
  );
}

export default App;
