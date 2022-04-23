export default function Callback1Child(props:{para:React.Dispatch<React.SetStateAction<number>>}) {

    const onChildButtonClick = () => {
            props.para(100)
        }

    return <div>

        <button onClick={onChildButtonClick}>Button Child Component - SetCount = 100</button>

    </div>
}