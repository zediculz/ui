import { NavLink } from "react-router";

export function AppErrorLayout() {
    return(
        <div className="app-error">
            <h2>Not Authorized</h2>
            <p><NavLink to="/" state={{}}>Go Back and Login</NavLink></p>
        </div>
    )
}