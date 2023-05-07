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
        <div className="font-Quicksand flex font-semibold">
            <div className="my-2 space-x-2 flex border-[1.2px] border-t-blue-900 border-b-blue-900 border-r-blue-900 bg-gradient-to-r from-slate-50 to-orange-100 rounded-r-full">
                <div className="">
                    {/* <input type="text" value={text} /> */}
                    {/* <textarea
                        className={` ${
                            todo.completed ? 'line-through' : 'w-full tracking-widest px-2 bg-slate-800/0 text-slate-600'
                        }`}
                    >
                        {text}
                    </textarea> */}
                    <div
                        // value={text}
                        className={` ${
                            todo.completed
                                ? 'w-auto break-all duration-200 line-through select-none py-4 tracking-widest pr-6 px-4 bg-slate-800/0 text-slate-500/40 '
                                // : 'w-auto select-none py-4 overflow-scroll hidebar tracking-widest px-4 pr-6 bg-slate-800/0 text-slate-600'
                                : 'w-auto break-all select-none py-4 hidebar tracking-widest px-4 pr-6 bg-slate-800/0 text-slate-600'
                        }`}
                    >
                        {text}
                    </div>
                </div>
            </div>
            <div className="center-flex pt-1 w-[10%] lg:w-[5%]">
                <div className="">
                    <button
                        className='bg-[url("https://raw.githubusercontent.com/sulekaustubh/image-vault/main/done.jpg")] h-6 w-6 bg-cover bg-center'
                        onClick={completeHandler}
                    ></button>
                </div>
                <div>
                    <button
                        className='bg-[url("https://raw.githubusercontent.com/sulekaustubh/image-vault/main/delete.jpg")] h-6 w-6 bg-cover bg-center'
                        onClick={deleteHandler}
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
