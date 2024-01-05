// // app.js에서 부여한 다이나믹 컨텐츠 라우팅 주소에 대한
// // 컴포넌트를 부여하고자 함

// //데이터가 느리게 로딩이 되면 데이터를 표시하는 헤더와 뷰어섹션이
// //데이터 도착전에 렌더링 되어서는 안됩니다.
// import { useParams ,useNavigate } from "react-router-dom";
// import useDiary from "../hooks/useDiary";
// import Button from "../component/Button";
// import Header from "../component/Header";
// import { getFormattedDate } from "../util";//함수 소환시 {}씀
// import Viewer from "../component/Viewer";


// const Diary = () => {
//   const {id} = useParams();
//   const data = useDiary(id);
//   const navigate = useNavigate();

//   const goBack = () =>{
//     navigate(-1);
//   }

//   const goEdit = () =>{
//     navigate(`/edit/${id}`);
//   }
  
//   if(!data){
//     return<div>일기 데이터를 불러오고 있습니다</div>
//   }
//   else{
 
//     const {date, emotionId, content}=data;
//     const title=`${getFormattedDate(new Date(Number(date)))}기록`
//     return (
//     <div>
//       <Header title={title}
//       leftChild={<Button text={"뒤로가기"}onClick={goBack}/>}
//       rightChild={<Button text={"수정하기"}onClick={goEdit}/>}
//       />
//       <div>{id}번 일기 </div>
//       <div>Diary 페이지 입니다</div>
//       <Viewer content={content} emotionId={emotionId}/>
//     </div>
//   );
// }
// };
// export default Diary;


// App.js에서 부여한 다이나믹 컨텐츠 라우팅 주소에 대한 컴포넌트를 부여
// useParams 사용 : 동적인 url경로에서 파라미터 값을 추출
import { useParams, useNavigate } from 'react-router-dom'
import useDiary from '../hooks/useDiary';
import Button from '../component/Button';
import Header from '../component/Header';
import { getFormattedDate } from '../util';
import Viewer from '../component/Viewer'


//데이터가 느리게 로딩이 되면 데이터를 표시하는 헤더와 뷰어 섹션이 빈 데이터로 처리되므로 데이터 도착 전에 렌더링 되어서는 안된다. 
const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id)
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }

  if (!data) {
    return (
      <div>일기를 불러오는 중입니다 ●'◡'●</div>
    )
  }
  else {
    const { date, emotionId, content } = data;
    const title =`${getFormattedDate(new Date(Number(date)))} 일기`
    return (
      <div>
        <Header
          title={title}
          leftChild={<Button type="positive" text={"<"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
}

export default Diary;
