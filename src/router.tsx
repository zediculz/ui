/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter } from "react-router"
import { Root, AppHomeLayout, AppSettingsLayout, AppCustomizeLayout } from "./app"

const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: AppHomeLayout},
      { path: "/customize", Component: AppCustomizeLayout  },
      {path: "/settings", Component: AppSettingsLayout }
    ]
  },
])


export default router