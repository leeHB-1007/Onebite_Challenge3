import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EmotionList } from "../util/constant";
import getStringedDate from "../util/get-stringed-date";

export default function MakeDiary({onSubmit, initData}) {
  const nav = useNavigate();
  const [data, setData] = useState({
    date: new Date(),
    emotionId: 0,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setData({
        date: new Date(Number(initData.date)),
        emotionId: initData.emotionId,
        content: initData.content
      });
    }
  }, [initData]);

  console.log("Current date in Editor:", data.date);
  console.log("Stringed date:", getStringedDate(data.date));

  const handleDataChange = (type, value) => {
    setData((prev) => ({
      ...prev,
      [type]: type === 'date' ? new Date(value) : value
    }));
  };

  const onClickSubmitButton = () => {
    onSubmit(data);
  }

  return (
    <div className="Editor">
      <section className="Calender">
        <h4>오늘의 날짜</h4>
        <input 
          type="date" 
          value={getStringedDate(data.date)} 
          onChange={(e) => handleDataChange('date', e.target.value)} 
        />
      </section>
      <section className="SelectEmo">
        <h4>오늘의 감정</h4>
        <div className="EmotionList">
          {EmotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              isSelected={item.id === data.emotionId}
              onClick={() => handleDataChange('emotionId', item.id)}
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
          onChange={(e) => handleDataChange('content', e.target.value)}
        />
        <div>
            
        </div>
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
