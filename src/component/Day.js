import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){
    const {day} = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))

    
    return <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
}

/*
url에 들어오는 값을 얻기 위해서 useParams 사용한다.
*/ 