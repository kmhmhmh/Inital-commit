import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";


const sortOptionList = [
  {value: "latest", name:"최신순"},
  {value: "oldest", name:"오래된순"},
]
const DiaryList = ({ data }) => {
  //useState를 호출해서 최신순, 오래된순 분류
  //분류 기준에 따라 state업데이트가 일어날 수 있게
  //리액트 훅스 state를 설정하였다 초기값은 최신순입니다.

  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData]=useState([]);

  useEffect(()=>{
    const compare = (a,b) =>{
      if(sortType ==="lastest"){
        return Number(b.date) - Number(a.date);
      }
      else{
        return Number(a.date) - Number(b.data);
      }
    }
  
  const copyList = JSON.parse(JSON.stringify(data));
  copyList.sort(compare);
  setSortedData(copyList);
  },[data, sortType]);
  //상대가 업데이트를 초기세팅하였다면 이제
  //상태 업데이트에 대한 이벤트 핸들러 함수를 선언 해야된다
  const onChangeSortType = (e)=>{
    setSortType(e.target.value);
  }
  const navigate = useNavigate();

  const onClickNew = ()=>{
    navigate("/new");
  }

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={sortType}
          onChange={onChangeSortType}>
            {sortOptionList.map((it,idx) =>(
            <option key={idx} value={it.value}>
              {it.name}
            </option>
            ))}</select>
        </div>
        <div className="right_col">
          <Button type={"positive"} 
          text={"새일기쓰기"} 
          onClick={onClickNew}/>
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((it)=>(
          <DiaryItem key={it.id} {...it}/>
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
