import World from "./World";
import {useState, usestate} from "react";
import UserName from "./UserName";

/*함수 컴포넌트 생성 방식*/ 
// const Hello = function(){
//     <p>Todo</p>;
// };

// const Hello2 = () =>{
//     <p>Todo</p>;
// };

// export default Hello;



/*Event 방식*/ 
// export default function Hello(){
//   return  <div>
//       <h1 style={{color:"red"}}>Hello</h1>
//       <button onClick={showName}>Show name</button>
//       <button onClick={()=> {showAge(31)} }>Show age</button>
//       <input type="text" onChange={e => {const txt = e.target.value; showText(txt);}}/>
//   </div>;
// }


// function showName(){
// console.log("taco");
// }

// function showAge(age){
//     console.log(age);
//     }

//     function showText(txt){
//         console.log(txt);
//     }


/*Hook useState()*/ 
    export default function Hello(props){
        const [name,setName] = useState("Mike");
        const msg = props.age > 19 ? "성인" : "미성년";


        function changeName(){
            const newName = name === "Mike" ? "Jane" : "Mike";
            setName(newName);
        }
        return  <div>
            <h2>{name}({props.age} : {msg})</h2>
            <UserName name={name}/>
            <button onClick={changeName}>Change</button>
            <button onClick={()=>{
                setName(name === "Mike" ? "Jane" : "Mike");
                }}>Change2</button>
        </div>;
      }

