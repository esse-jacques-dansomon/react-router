import {Link, Outlet} from "react-router-dom";

export function BookLayout() {
    return (
        <>
            <h1>Book Layout</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                alignContent: "flex-start"
            }}>
                <div style={{paddingRight: "10px"}}>
                    <ul>
                        <li><Link to="/books/1">Book 1</Link></li>
                        <li><Link to="/books/2">Book 2</Link></li>
                    </ul>
                </div>
                <div>
                    <Outlet context={{hello: "hello word"}}></Outlet>
                </div>
            </div>
        </>
    );
}