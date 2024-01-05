import Header from "../component/Header";
import Button from "../component/Button";
import { useNavigate,useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { useContext } from "react";
import { DiaryDispatchContext} from "../App";

//커스텀 훅스의 기능 사용경우는
//일반함수에서 룩스가 안먹는 경우도 있지만
const Edit = () => {
    const{id} = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();

    const {onDelete} = useContext(DiaryDispatchContext);

    const onClickDelete=()=>{
        if(window.confirm("일기를 진짜 삭제할까요? 복구되지 않습니다.!!"))
        onDelete(id);
        navigate("/", {replace:true});
    }

    const goBack = ()=>{
        navigate(-1);
    }
    
    if(!data){
        return <div>일기를 불러오고 있습니다.</div>
    }
    else{
        return <div><Header title={"일기수정하기"}
        leftChild={<Button text={"뒤로가기"} onClick={goBack}/>}
        rightChild={<Button type={"negative"} text={"삭제하기"}
        onClick={onClickDelete}/>}
        />
        </div>
    }
};
export default Edit;