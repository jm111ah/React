import {Link} from "react-router-dom";

export default function Header(){
    return (
        <div>
            <h1 className="header">
                <Link to="/">Todo List</Link>
            </h1>
        </div>
    );
}
