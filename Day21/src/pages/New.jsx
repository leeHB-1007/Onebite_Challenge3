import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import MakeDiary from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const onSubmit = (input) => {
    onCreate(input.date.getTime(), input.emotionId, input.content);
    navigate("/", {replace: true})
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button text={"<"} type={"BACK"} onClick={() => navigate(-1)} />
        }
      />
      <MakeDiary onSubmit={onSubmit} />
    </div>
  );
};

export default New;
