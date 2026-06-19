
import { Root } from "./root"
import { AppHomeLayout } from "./home"
import { AppProfileLayout } from "./profile"
import { AppSettingsLayout } from "./settings"

import type { Location, NavigateFunction } from "react-router"


//ROOT FUNCTIONS
interface NAV {
    to: string,
    auth: boolean,
    navigate: NavigateFunction,
    location: Location
}

/**@function nav @param {string} to */
function handleNav({to, auth, navigate, location}:NAV) {
    const path = auth ? to : "/"
    navigate(path, {
      state: {
        ...location.state,
        navOptions: {
          to,
          from: location.pathname,
          key: location.key
        }
      },
      viewTransition: true
    })
  }


export {
    Root, AppHomeLayout, AppProfileLayout, 
    AppSettingsLayout, handleNav
}
