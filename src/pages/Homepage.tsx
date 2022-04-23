import "./Homepage.css"
import {Link} from "react-router-dom";

export default function Homepage() {

    return <div className={"homepage"}>
        <h1>Hallo auf der Homepage</h1>

        <div className={"links"}>

            {/*<Link to="/">MainPage</Link>*/}
            <Link to="/p1"> ProgramFlow</Link>
            <Link to="/p2">Callback1</Link>
            <Link to="/p3">Callback2</Link>
            <Link to="/p4">FunctionConstClass</Link>

        </div>


    </div>
}