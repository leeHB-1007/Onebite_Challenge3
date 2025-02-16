import "./Viewer.css";
import getEmotionImage from "../util/get-emotion-image";
import { EmotionList } from "../util/constant";

export default function Viewer({ emotionId, content }) {
  const emotionItem = EmotionList.find(
    (item) => String(item.id) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="Img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="Emotion" />
          <div>
            {emotionItem ? emotionItem.content : "감정을 찾을 수 없습니다."}
          </div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
}
