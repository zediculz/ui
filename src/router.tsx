/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter } from "react-router"
import { Root, AppHomeLayout, AppProfileLayout, AppSettingsLayout } from "./app"

const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: AppHomeLayout},
      {path: "/profile", Component: AppProfileLayout  },
      {path: "/orders", Component: AppSettingsLayout }
    ]
  },
])


export default router