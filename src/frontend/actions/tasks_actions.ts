import * as tasksConstants from '../constants/tasks_constants'
import * as TaskAPIUtil from '../util/tasks_util'

export const receiveTasks = (tasks: Task[]) => ({
  type: tasksConstants.RECEIVE_TASKS,
  tasks
})

export const requestTasks = () => {
  TaskAPIUtil.fetchTasks().then(
    res => receiveTasks(res)
    //what to do with an error goes here
  )
}
