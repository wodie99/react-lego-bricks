import React from "react";

const CallConst = (props: {paraName:string, paraAge:number}) => {
    const Tage = props.paraAge * 365

    return <div>
        <p>Ausgabe mit Componente als "const CallConst () =&gt; ...": {props.paraName} ist über {Tage} Tage alt</p>

    </div>
}
export default CallConst
