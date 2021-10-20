import {atom, atomFamily} from 'recoil';
import { TodoContent } from '../types.d';

export const TodoContentState = atom<TodoContent[]>({
    key: 'TodoContent',
    default: []
});

export const TodoCompleteState= atomFamily<boolean, string>({
    key: "TodoComplete",
    default: false,
})