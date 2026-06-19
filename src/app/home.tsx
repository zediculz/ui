/* eslint-disable @typescript-eslint/no-unused-vars */
//HOME PAGE
//FEATURES

import { useState } from "react"
import { AppHeader } from "../components/header"

//COMPONENTS
export function AppHomeLayout() {
    const [h, setH] = useState<string>("Some Text Messages like this, well structed to display nothing less than 120 pts as a quote, bible verse and motivations")
    const [hLength, setHLength] = useState<number>(h.length)

    return (
        <>
        <AppHeader />
        <div className="app-main">
            <div className="app-main-home">
                <div className="center">
                    <b>{hLength}</b>
                    <h1>{h}</h1>
                    <p>Markavelli, 1805</p>
                </div>
                <div className="time">
                    <h3>1st of March, 2026, May 2026.</h3>
                </div>
            </div>
            </div>
        </>
    )
}