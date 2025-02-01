import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./FetchData";
import { memo } from "react";

const DisplayData = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    });



    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Todos List</h2>
            <ul className="space-y-3">
                {data.slice(0, 10).map((todo, key) => (
                    <TodoItem item={todo} />
                ))}
            </ul>
        </div>
    );
}

export default memo(DisplayData);
