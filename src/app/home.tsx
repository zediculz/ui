/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
//HOME PAGE
//FEATURES

import { useEffect, useState } from "react"
import { AppHeader } from "../components/header"
import { deviceInfo } from "../sys/device"

//COMPONENTS
export function AppHomeLayout() {
    const [h, setH] = useState<string>("")
    const [hLength, setHLength] = useState<number>(h.length)

    useEffect(() => {
        setHLength(h.length)
        setH("Some Text Messages like this, well structed to display nothing less than 120 pts as a quote, bible verse and motivations")
    }, [h.length])

    console.log(deviceInfo)
    
    if ('userAgentData' in navigator) {
        const ua = (navigator as any).userAgentData;
        ua.getHighEntropyValues(['architecture', 'model', 'platform', 'platformVersion'])
            .then((data: any) => {
                console.log('userAgentData', data);
            });
    }

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