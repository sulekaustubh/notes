import React from 'react';

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
            <div className="pt-2 ">
                <button
                    // className="bg-blue-500 text-4xl w-10 text-slate-50 font-semibold rounded-full tracking-wider font-Quicksand"
                    className={`${inputText.length === 0 ? 'pointer-events-none select-none bg-blue-400 text-4xl w-10 text-slate-50 font-semibold rounded-full tracking-wider font-Quicksand' : 'bg-blue-500  select-none text-4xl w-10 text-slate-50 font-semibold rounded-full tracking-wider font-Quicksand'}`}
                    onClick={submitTodoHandler}
                    type="submit"
                >
                    +
                </button>
            </div>
        </form>
    );
};

export default Form;
