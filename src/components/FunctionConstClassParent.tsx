import CallFunction from "./FunctionConstClassChild1";
import CallConst from "./FunctionConstClassChild2";
import CallClass from "./FunctionConstClassChild3";

export default function FunctionConstClassParent() {

    const firstName = "Johann"
    const age = 8

    return <div>
        <CallFunction paraName={firstName} paraAge={age}/>
        <CallConst paraName={firstName} paraAge={age}/>
        <CallClass paraName={firstName} paraAge={age}/>

    </div>

}

