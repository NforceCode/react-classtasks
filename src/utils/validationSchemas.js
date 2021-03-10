import * as Yup from 'yup';

export const TASK_SCHEMA = Yup.string().matches(/^[\w][\w\W]{1,}$/, 'Task must start with non special symbol');

export const TODO_APP_SCHEMA = Yup.object({
  text: TASK_SCHEMA,
});