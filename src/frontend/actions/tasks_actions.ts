import * as tasksConstants from '../constants/tasks_constants'

export interface ReceiveTasks {
  type: tasksConstants.RECEIVE_TASKS
  tasks: Task[]
}

export interface ReceiveTask {
  type: tasksConstants.RECEIVE_TASK
  task: Task
}

export interface RemoveTask {
  type: tasksConstants.REMOVE_TASK
  task: Task
}

export type TaskAction = ReceiveTasks | ReceiveTask | RemoveTask
