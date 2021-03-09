import * as Yup from 'yup';

export const TASK_SCHEMA = Yup.string().matches(/^[A-Z][\w\W]{1,}$/, 'Task must start with Uppercase letter').required();

export const TODO_APP_SCHEMA = Yup.object({
  text: TASK_SCHEMA,
});