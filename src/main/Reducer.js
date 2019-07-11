import { combineReducers } from 'redux';

import Search from '../pages/search/reducer';
import Create from '../pages/create/reducer';

export default combineReducers({
  Search: Search,
  Create: Create
});