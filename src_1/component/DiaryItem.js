// import { useNavigate } from "react-router-dom";
// import {getEmotionImgById} from "../util"
// import "./DiaryItem.css";
// import Button from "./Button.js"


// const DiaryItem = ({id, emotionId, content, date}) =>{
//     const navigate = useNavigate();
//     const goDetail=()=>{
//         navigate(`diary/${id}`);
//     }
//     const goEdit =()=>{
//         navigate(`/edit/${id}`);
//     }
//     return(
//     <div className="DiaryItem"><div onClick={goDetail}
//     className={["img_section", `img_section_${emotionId}`].join(" ")}>
//         <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)}/>
//         </div>
//         <div onClick={goDetail} className="info_section">
//             <div className="date_wrapper">
//                 {new Date(parseInt(date)).toLocaleDateString()}
//             </div>
//             <div className="content_wrapper">{content.slice(0,25)}</div>
//         </div>
//             <div className="button_wrapper">
//                 <Button onClick={goEdit} text={"수정하기"}/>
//             </div>
//     </div>
//     );
// };
// export default DiaryItem;


import { useNavigate } from 'react-router-dom';
import { getEmotionImgById } from '../util';
import './DiaryItem.css';
import Button from './Button';

const DiaryItem = ({id, emotionId, content, date}) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`diary/${id}`);
    };
    const options = { year: "numeric", month: "long", day: "numeric", weekday: "long" };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <div className='DiaryItem'>
            <div onClick={goDetail} className={['img_section', `img_section_${emotionId}`].join(' ')}>
                <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
            </div>
            <div onClick={goDetail} className='info_section'>
                <div className='date_wrapper'>
                    {/* {new Date(parseInt(date)).toLocaleDateString()} */}
                    {new Date(parseInt(date)).toLocaleDateString("ko-KR", options)}
                </div>
                <div className='content_wrapper'>
                    {content.slice(0, 25)}
                </div>
            </div>
            <div className='button_section'>
                <Button onClick={goEdit} text={'수정하기'}/>
            </div>
        </div>
    )
};

export default DiaryItem;