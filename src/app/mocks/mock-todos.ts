import { Todo } from '../models/todo';

import { TodoInterface } from '../interfaces/todo-interface';

export const TODOS: Todo[] = [
    { id: 1, name: 'Take out trash', tags: ['Weekly', 'Monthly'], isCompleted: false, isDeleted: false },
    { id: 2, name: 'Become the trash', tags: ['Daily', 'Bi-Weekly'], isCompleted: false, isDeleted: false },
    { id: 3, name: 'Eat the food', tags: ['Weekly', 'Daily'], isCompleted: false, isDeleted: false },
    { id: 4, name: 'Befriend puppets', tags: ['Daily', 'Hourly'], isCompleted: false, isDeleted: false },
    { id: 5, name: 'Join Sesame Street', tags: ['Daily', 'Monthly', 'Yearly'], isCompleted: false, isDeleted: false }
];
