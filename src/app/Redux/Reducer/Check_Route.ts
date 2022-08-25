import { CheckRoute } from 'src/app/Interfaces/Check_Route';
import { Action } from '../Action';

const initialState: CheckRoute = {
  Route: '',
  Title: '',
};

export function Check_Route(state = initialState, action: Action): CheckRoute {
  switch (action.type) {
    case 'Check_Route': {
      return {
        ...state,
        Route: action.payload?.Route,
        Title: action.payload?.Title,
      };
    }
    default:
      return state;
  }
}

export const Route = (state: CheckRoute) => state.Route;
export const Title = (state: CheckRoute) => state.Title;
