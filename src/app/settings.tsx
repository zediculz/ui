import { useState } from "react"
import { AppPopHeader } from "../components/pop"

interface ToggleTypes {
    title: string 
    toggle: boolean
}

function Toggle(e:ToggleTypes) {
    const [toggle, SetToggle] = useState<boolean>(e?.toggle || true)
    const handleToggle = (toggle: boolean) => SetToggle(toggle)

    return (
        < div className="toggle-wrap" >
            <h4>{e?.title}</h4>
            <p onClick={() => handleToggle(!toggle)}>{toggle ? <span>on</span> : <span>off</span>}</p>
        </div >
    )
}

export function AppSettingsLayout() {
    const toggleDatas:ToggleTypes[] = [{title: "dark mode", toggle: true}]
    return (
        <>
        <AppPopHeader />
        <div className="app-main">
            <div className="app-main-settings">
                <div className="center">
                    {toggleDatas.map((e, i) => {
                        return (
                            <Toggle title={e.title} toggle={e.toggle} key={i} />
                        )
                    })}
                </div>
                <div className="info">
                    <b>Watch, {new Date().getFullYear()}</b>
                </div>
            </div>
            </div>
        </>
    )
}