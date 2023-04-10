//todo apiden gelen verinin todos type
interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

//todolist içine giden todos type için
interface ITodoList {
  todos: TodoType[];
  toggleTodo: toggleFn;
  deleteTodo: deleteFn;
}

//todolistitem içine giden item type için

interface IListItem {
  item: TodoType;
  toggleTodo: toggleFn;
  deleteTodo: deleteFn;
}

interface IInputForm {
  addTodo: addFn;
}

type addFn = (text: string) => void;
type toggleFn = (item: TodoType) => void;
type deleteFn=(id: string | number) => void;