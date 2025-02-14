import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EmotionList = [
  {
    id: 1,
    img: 1,
    content: "아주 좋음",
  },
  {
    id: 2,
    img: 2,
    content: "좋음",
  },
  {
    id: 3,
    img: 3,
    content: "보통",
  },
  {
    id: 4,
    img: 4,
    content: "나쁨",
  },
  {
    id: 5,
    img: 5,
    content: "아주 나쁨",
  },
];
const getStringedDate = (date) => {
    let year  = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if( month < 10){
        month = `0${month}`;
    }
    if (day < 10){
        day = `0${day}`
    }

    return `${year}-${month}-${day}`
}

export default function MakeDiary({onSubmit}) {
  const nav = useNavigate();
  const [data, setData] = useState({
    date: new Date(),
    emotionId: 0,
    content: "",
  });
  const onClickSubmitButton = () => {
    onSubmit(data);
  }

  const handleDateChange = (e) => {
    setData((prev) => ({ ...prev, date: new Date(e.target.value) })); 
  };
  const handleEmotionClick = (id) => {
    setData((prev) => ({ ...prev, emotionId: id }));
  };
  const handleContentChange = (e) => {
    setData((prev) => ({ ...prev, content: e.target.value }));
  };
  return (
    <div className="Editor">
      <section className="Calender">
        <h4>오늘의 날짜</h4>
        <input type="date" value={getStringedDate(data.date)} onChange={handleDateChange} />
      </section>
      <section className="SelectEmo">
        <h4>오늘의 감정</h4>
        <div className="EmotionList">
          {EmotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              isSelected={item.id === data.emotionId}
              onClick={() => handleEmotionClick(item.id)}
            />
          ))}
          {console.log(data)}
        </div>
      </section>
      <section className="InputDiary">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          value={data.content}
          onChange={handleContentChange}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)}></Button>
        <Button
          text={"작성하기"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        ></Button>
      </section>
    </div>
  );
}
