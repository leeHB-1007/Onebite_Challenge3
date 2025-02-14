import "./EmotionItem.css";
import getEmotionImage from "../util/get-emotion-image";

export default function EmotionItem({ id, content, isSelected, onClick}) {
  return (
    <div className={`EmotionItem ${isSelected ? ` Emotion_on_${id}` : ""}`}
    onClick={onClick}>
      <img src={getEmotionImage(id)} className="emotion_img" />
      <span className="emotion_content">{content}</span>
    </div>
  );
}
