/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router"

import { AppHeader } from "../components/header"
import { AppBottom } from "../components/bottom"

export function Root() {
  return(
    <section className="root-container">
      <AppHeader />
      {<Outlet />}
      <AppBottom />
    </section>
  )
}
