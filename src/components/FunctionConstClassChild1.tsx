import React from "react";


export default function CallFunction(props: {paraName:string, paraAge:number}) {
    const Tage = props.paraAge * 365

    return <div>
        <p>Ausgabe mit Componente als "export default function": {props.paraName} ist über {Tage} Tage alt</p>

    </div>
}
