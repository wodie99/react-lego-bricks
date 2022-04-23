import {useState} from "react";
import Callback1Child from "./Callback1Child";

export default function Callback1Parent() {

    const [count, setCount] = useState<number>(0)

    const onParentButtonClick = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <h3>Anzeige von Count in der Parent-Componente: {count}</h3>
            <button onClick={onParentButtonClick}>Button Parent Component - Count: {count}</button>


            <Callback1Child para={setCount}/>
            {/*<Callback1Child/>*/}
        </div>
    );
}