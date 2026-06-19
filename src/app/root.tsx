/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router"

import { AppErrorLayout } from "./error"
import { AppHeader } from "../components/header"
import { AppBottom } from "../components/bottom"

export function Root() {
  const [auth, setAuth] = useState<boolean>(true)
  const location = useLocation()

  useEffect(() => {
    if(location.state === null || location.state.token === null || location.state.token === "") {
      setAuth(false)
    } else {
      setAuth(true)
    }
  }, [location.state])

  return(
    <section className="root-container">
      <AppHeader />
      {auth ?  <Outlet /> : <AppErrorLayout />}
      <AppBottom auth={auth} />
    </section>
  )
}
