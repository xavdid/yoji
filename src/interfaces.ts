// in the database foreign keys are ids
// we'll see how it works on the front, but we'll either pull them out as full objects (potentially lots of repetition) or keep the foreign ids and have the frontend be responsible for lookups
// right now the interface will accomodate either, but we'll specify later

interface Task {
  title: string
  id: string
  createdDate: string // probably a datetime object? depends how it comes out of pg. also might get it for free from pg or from the id if it supports UUIDs
  list: string | List
  dueDate?: string
  startDate?: string
  parent?: string | Task
  dependents?: string[] | Task[]
  tags?: string[] | Tag[]
  order?: number // decides how we order is the owner list, sorting updates these for all tasks. default to no order, which means it'll get sorted by created after all the explicitly ordered tasks
  recurranceType?: 'day' | 'week' | 'month' | 'year'
  recurranceCount?: number
}

interface User {
  email: string
  id: string
  password: string // we should use an auth service because doing this ourself is no bueno
}

interface Tag {
  name: string // no leading #
}

interface List {
  name: string
  id: string
  order?: number
  user_id: string
}
