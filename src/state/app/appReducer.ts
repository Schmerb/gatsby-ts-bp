/**
 *
 * App Reducer
 *
 *  */

import { SET_IS_EU, CHANGE_LOCALE } from "state/app/appActions"

const initialState: AppStateProps = {
  isEU: false,
}

export interface AppStateProps {
  isEU: boolean
}

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_IS_EU:
      return {
        ...state,
        isEU: action.isEU,
      }
    default:
      return state
  }
}
export default appReducer
