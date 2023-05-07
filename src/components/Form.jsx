import React from 'react';
import '../styles.css';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText('');
    };
    return (
        // I am using div instead of form
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                className="border-2 py-2 tracking-widest focus:outline-none rounded-3xl px-2 w-full border-blue-500"
                type="text"
                placeholder="Write here.."
            />
            <div className="pt-2 flex place-content-between">
                <button
                    // className="bg-blue-500 text-4xl w-10 text-slate-50 font-semibold rounded-full tracking-wider font-Quicksand"
                    className={`${
                        inputText.length === 0
                            ? 'pointer-events-none focus:outline-none select-none bg-blue-400 text-4xl w-10 text-slate-50 font-semibold rounded-full tracking-wider font-Quicksand'
                            : 'bg-blue-500 no_highlights focus:outline-none select-none text-4xl w-10 text-slate-50 font-semibold rounded-full tracking-wider font-Quicksand'
                    }`}
                    onClick={submitTodoHandler}
                    type="submit"
                >
                    +
                </button>
                <div className="xs:text-[10px] tracking-wide border-black md:text-xs pr-1 text-slate-500 select-none">
                    <div className="absolute">
                        <div className="invisible lg:visible">
                            *single click - task done
                        </div>
                        <div className="invisible lg:visible">
                            *double click - task done
                        </div>
                    </div>
                    <div className="">
                        <div className="lg:invisible">
                            *single tap - task done
                        </div>
                        <div className="lg:invisible ">
                            *double tap - task delete
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;
