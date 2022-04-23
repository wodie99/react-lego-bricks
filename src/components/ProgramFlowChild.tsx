import {useState} from "react";


export default function ProgramFlowChild(props:{statusFlag:boolean}) {

    const [count, setCount] = useState<number>(0)

    const onChildButtonClick = () => {
        setCount(count + 1)
    }

    console.log(props.statusFlag)

    if (props.statusFlag) {
        setCount(count + 1)
    }

    console.log(count)

    return <div>
        <h1>Hallo</h1>
        <button onClick={onChildButtonClick}>Button Child Component - Zähler ist: {count}</button>
    </div>
}