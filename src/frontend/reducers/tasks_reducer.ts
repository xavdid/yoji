import {
  // RECEIVE_TASK,
  RECEIVE_TASKS
  // REMOVE_TASK
} from '../constants/tasks_constants'
import StoreState from '../types/store_types'
import { TaskAction } from '../types/task_types'

// import merge from 'lodash/merge'

const TasksReducer = (state: StoreState, action: TaskAction) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks
    default:
      return state
  }
}

export default TasksReducer
