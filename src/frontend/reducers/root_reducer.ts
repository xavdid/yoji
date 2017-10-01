import { combineReducers } from 'redux'

import TasksReducer from './tasks_reducer'

const RootReducer = combineReducers({
  tasks: TasksReducer
})

export default RootReducer
