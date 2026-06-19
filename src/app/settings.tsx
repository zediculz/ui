import { useState } from "react"

export function AppSettingsLayout() {
    const [toggle, SetToggle] = useState<boolean>(true)
    const handleToggle = (toggle: boolean) => SetToggle(toggle)
    
    return (
        <div className="app-main">
            <div className="app-main-settings">
                <div className="center">
                    <div className="toggle-wrap">
                        <h4>Toggle Name</h4>
                        <p onClick={() => handleToggle(!toggle)}>{toggle ?  <span>on</span> :<span>off</span>}</p>
                    </div>
                </div>
                <div className="info">
                    <b>Watch, {new Date().getFullYear()}</b>
                </div>
            </div>
            <h2>/setting --settings page</h2>
        </div>
    )
}