import {useState} from "react";
import Callback2Child from "./Callback2Child";




export default function Callback2Parent() {

    const [count, setCount] = useState<number>(0)

    const onParentButtonClick = () => {
        setCount(count + 1)
    }


    return (
        <div className="App">
            <h3>Anzeige von Count in der Parent-Componente: {count}</h3>
            <button onClick={onParentButtonClick}>Button Parent Component - SetCount +1 - Count: {count}</button>


            <Callback2Child paraCount={count} paraSetCount={setCount}/>
        </div>
    );
}