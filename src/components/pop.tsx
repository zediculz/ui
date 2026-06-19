//done
//FEATURES

import { useLocation, useNavigate } from "react-router"
import { handleNav } from "../app"

//Component
export function AppPopHeader() {
    const N = useNavigate()
    const L = useLocation()
   
    return (
        <header className="pop-header">
            <h3 onClick={() => handleNav({
                to: "/", auth: true, navigate: N, location: L
            })}>x</h3>
        </header>
    )
}