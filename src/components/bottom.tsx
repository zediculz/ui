import { BiSolidCart, BiHomeCircle, BiUser, BiSolidHomeCircle, BiCart, BiSolidUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import { handleNav } from "../app";
import { useState } from "react";

interface AppBottomType {
    auth: boolean
}

type FOCUS = "home"|"order"|"user"

export function AppBottom(e:AppBottomType) {
    const [focus, setFocus] = useState<FOCUS>("home")

    const N = useNavigate()
    const L = useLocation()

    const nav = (to:string, f:FOCUS) => {
        setFocus(f)
        handleNav({to, auth: e.auth, navigate: N, location: L})
    }

    return(
        <footer style={{display: e.auth ? "flex" : "none"}}>
        <div className="center">
          <aside>
            <h3 onClick={() => nav("/app", "home")}>
               {focus === "home" ? <BiSolidHomeCircle /> : <BiHomeCircle />}
            </h3>
            <p>home</p>
          </aside>
          <aside>
            <h3 onClick={() => nav("/app/orders", "order")}>
                {focus === "order" ? <BiSolidCart /> : <BiCart />}
            </h3>
            <p>orders</p>
          </aside>
          <aside>
            <h3 onClick={() => nav("/app/profile", "user")}>
                {focus === "user" ? <BiSolidUser /> : <BiUser />}
            </h3>
            <p>user</p>
          </aside>
        </div>
      </footer>
    )
}