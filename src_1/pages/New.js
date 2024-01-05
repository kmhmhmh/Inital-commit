import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

//작성완료 버튼을 누르면 일기 데이터가 추가된다!
//app함수의 onCreate를 호출해서 추가해야 하니까
//함수 onCreate를 DiaryDispatchContext에서 불러와야죠


const New = () => {
  //리액트 훅을 사용하여 DiaryDispatchContext를 인수로 받아서
  //onCreate 함수 소환
  //중괄호를 쓰는 이유는 일기 데이터의 구조가
  //json 파일형식의 객체데이터 형테이기 때문
    const {onCreate} = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBack=()=>{
      navigate(-1);
    };

    const onSubmit = (data) =>{
      const{date, context, emotionId}=data;
      onCreate(date, context, emotionId);
      navigate('/',{replace:true})
    }

    return(
      <div>
      <Header
      title={"새 일기 쓰기"}
      leftChild={<Button text={"<뒤로가기"} onClick={goBack}/>}
      />
      <Editor onSubmit={onSubmit}/>
      </div>
    )
};
export default New;