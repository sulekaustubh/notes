import React from 'react';
import '../styles.css';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };
    return (
        <div className="font-Quicksand flex pr-2 font-semibold">
            <div
                onClick={completeHandler}
                onDoubleClick={deleteHandler}
                className="my-2 cursor-pointer no_highlights focus:outline-none space-x-2 flex bg-[#252525] rounded-r-full"
            >
                <div className="">
                    <div
                        // value={text}
                        className={` ${
                            todo.completed
                                ? 'w-auto break-all duration-200 line-through select-none py-4 tracking-widest pr-6 px-4 bg-slate-800/0 text-slate-500 '
                                : 'w-auto break-all select-none py-4 hidebar tracking-widest px-4 pr-6 bg-slate-800/0 text-slate-50'
                        }`}
                    >
                        {text}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;
