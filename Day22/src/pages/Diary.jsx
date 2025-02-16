import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import getStringedDate from "../util/get-stringed-date";
const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id);
    if(!curDiaryItem) {
        return <div>데이터 로딩 중 입니다.</div>
    }
    const { createdDate, emotionId, content } = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));
  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"<"} onClick={() => nav(-1)} />}
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => nav(`/edit"/${params.id}`)}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
