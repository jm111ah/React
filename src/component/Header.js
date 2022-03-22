import {Link} from "react-router-dom";

export default function Header(){
    return (
        <div>
            <h1 className="header">
                <Link to="/">토익 영단어(고급)</Link>
            </h1>
            <div className="menu">
                <a href="#" className="link">단어 추가</a>
                <a href="#" className="link">Day 추가</a>
            </div>
        </div>
    );
}
