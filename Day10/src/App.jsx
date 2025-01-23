import "./App.css";

function Welcome({ name, isMember }) {
  return (
    <h1>
      {isMember
        ? `${name}님 다시 오셨군요`
        : `${name}님 가입하시겠어요?`}
    </h1>
  );
}

function App() {
  return <Welcome name={"초롱이"} isMember={true} />;
}

export default App;
