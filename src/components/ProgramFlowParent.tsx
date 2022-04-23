import {useState} from "react";
import ProgramFlowChild from "./ProgramFlowChild";

export default function ProgramFlowParent() {

    const [status, setStatus] = useState<boolean>(false)

    const onParentButtonClick = () => {
        status ? setStatus(false) : setStatus(true)
    }


    return (
        <div className="App">
            <h3>Schalte weitern Aufruf von Child-setCount()</h3>

                {status
                    ? <button onClick={onParentButtonClick}>Button Parent Component - Flag für setCount: TRUE</button>
                    : <button onClick={onParentButtonClick}>Button Parent Component - Flag für setCount: FALSE</button>
                }

            <ProgramFlowChild statusFlag={status}/>
        </div>
    );
}