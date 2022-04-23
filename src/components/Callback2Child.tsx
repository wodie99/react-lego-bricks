// export default function Callback2Child(props:{count:number, para:React.Dispatch<React.SetStateAction<number>>})
export default function Callback2Child(props: {paraCount: number, paraSetCount:React.Dispatch<React.SetStateAction<number>>}):JSX.Element {


    const onChildButtonClick = () => {
            props.paraSetCount(props.paraCount + 10)
        }

    return <div>

        <button onClick={onChildButtonClick}>Button Child Component - SetCount +10 - Count: {props.paraCount}</button>

    </div>
}