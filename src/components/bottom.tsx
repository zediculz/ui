import { BiSolidCart, BiHomeCircle, BiUser, BiSolidHomeCircle, BiCart, BiSolidUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import { handleNav } from "../app";
import { useState } from "react";


type FOCUS = "c"|"h"|"s"

export function AppBottom() {
    const [focus, setFocus] = useState<FOCUS>("h")

    const N = useNavigate()
    const L = useLocation()

    const nav = (to:string, f:FOCUS) => {
        setFocus(f)
        handleNav({to, auth: true, navigate: N, location: L})
    }

    return(
        <footer>
        <div className="center">
          
          <aside>
            <h3 onClick={() => nav("/customize", "c")}>
              {focus === "c" ? <BiSolidCart /> : <BiCart />}
              <p>customize</p>
            </h3>
          </aside>

          <aside>
            <h3 onClick={() => nav("/", "h")}>
              {focus === "h" ? <BiSolidHomeCircle /> : <BiHomeCircle />}
              <p>home</p>
            </h3>
          </aside>
          
          <aside>
            <h3 onClick={() => nav("/settings", "s")}>
              {focus === "s" ? <BiSolidUser /> : <BiUser />}
              <p>settings</p>
            </h3>
          </aside>
        </div>
      </footer>
    )
}