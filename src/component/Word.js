import { useState } from "react";



export default function Word({word}){
    const [isShow,setisShow] = useState(false);
    const [isDone,setisDone] = useState(word.isDone);

    function toggleShow(){
        setisShow(!isShow);
    }

    function toggleDone(){
        setisDone(!isDone);
    }
    

    return (
        <tr className={isDone ? "off" : ""}>
        <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
        <td>{word.kor}</td>
        {/* <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}>
            뜻 {isShow ? "숨기기" : "보기"}
            </button>
            <button className="btn_del">삭제</button>
        </td> */}
    </tr>
    );
}


/*
JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됩니다.
*/ 
