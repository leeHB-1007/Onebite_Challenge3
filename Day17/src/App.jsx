import { useCallback } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { useMemo } from "react";

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

export const ContactContext = createContext(); //contacts State 공급
export const DispatchContext = createContext(); // onCreateContact, onRemoveContact 공급
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

  const memoizedDispatch = useMemo(() => {
    return {
      onPlusContact,
      onRemoveContact,
    };
  });

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactContext.Provider value={contacts}>
        <DispatchContext.Provider value={memoizedDispatch}>
          <ContactEditor />
          <ContactList />
        </DispatchContext.Provider>
      </ContactContext.Provider>
    </div>
  );
}

export default App;
