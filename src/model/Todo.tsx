export type UniqueId = number | string | undefined;

interface Todo {
    id: UniqueId;
    title: string;
    completed: boolean;
}

export default Todo;