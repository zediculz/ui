/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router"

import { AppBottom } from "../components/bottom"

export function Root() {
  return(
    <section className="root-container">
      {<Outlet />}
      <AppBottom />
    </section>
  )
}
