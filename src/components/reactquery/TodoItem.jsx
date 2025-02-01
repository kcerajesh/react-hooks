
const TodoItem = ({ item }) => {
    return (
        <li
            key={item.id}
            className={`p-3 rounded-lg shadow-md flex justify-between items-center ${item.completed ? "bg-green-100" : "bg-red-100"}`}
        >
            <span>{item.title}</span>
            <span
                className={`text-xs px-2 py-1 rounded-full ${item.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
                {item.completed ? "Completed" : "Pending"}
            </span>
        </li>
    )
}

export default TodoItem;
