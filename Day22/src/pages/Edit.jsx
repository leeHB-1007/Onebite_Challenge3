import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  if (!params.id) {
    console.error("params.id가 정의되지 않았습니다.");
    nav("/", { replace: true });
    return null;
  }

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제 하시겠습니까?")) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    } else {
      // 삭제 취소 로직
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 수정하시겠습니까?")) {
      onUpdate(params.id, input.date.getTime(), input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title="일기 수정하기"
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type="NEGATIVE" onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
