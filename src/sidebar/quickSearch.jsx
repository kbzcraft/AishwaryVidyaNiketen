import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

export const QuickSearch = (props) => {
    const [query, setQuery] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const filteredInfo = props.data.filter((data) => {
        return (
            data.designation.toLowerCase().includes(query.toLowerCase()) ||
            data.name.toLowerCase().includes(query.toLowerCase())
        );
    });

    return (
        <aside id="sidebar-q" className="flex overflow-y-scroll">
            <button
                onClick={() => {
                    setModalIsOpen(true);
                }}
                className="md:h-8 my-2 px-2 items-center mx-auto md:w-60 flex justify-between border-[#adb1b6da] border-2 rounded-full md:rounded-lg"
            >
                <div className="flex items-center justify-center">
                    <BiSearch size={25} className="px-1 my-auto" />
                    <span className="font-secondary hidden my-auto md:inline-block">quick search</span>
                </div>
                <kbd className="hidden md:block">ctrl K</kbd>
            </button>
            {modalIsOpen && (
                <div
                    id="searchModal"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={() => {
                        setModalIsOpen(false);
                    }}
                >
                    <div
                        className="w-[96vw] max-w-[700px] max-h-[75vh] bg-white rounded-lg p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="flex gap-2 justify-between items-center h-10 border-b-2 border-slate-500">
                            <BiSearch size={25} className="p-1" />
                            <input
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                                type="search"
                                placeholder="search links"
                                className="flex-grow outline-none"
                            />
                            <button
                                onClick={() => {
                                    setModalIsOpen(false);
                                }}
                            >
                                <kbd className="px-2 py-1 text-[10px] font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                    Esc
                                </kbd>
                            </button>
                        </div>
                        <div id="results" className="min-h-[200px]">
                            <h1>Results</h1>
                            <ul id="resultLists" className="gap-4 overflow-y-scroll md:max-h-[60vh] max-h-[65vh]">
                                {filteredInfo.map((info, index) => (
                                    <li key={index} className="cursor-pointer mb-1 hover:bg-slate-400 rounded-lg">
                                        <a
                                            href="#profileCard"
                                            className="flex gap-1"
                                            onClick={() => {
                                                props.onProfileIndexChange(index);
                                                setModalIsOpen(false);
                                            }}
                                        >
                                            <div className="img-div w-14 h-14 bg-slate-400 opacity-90 rounded-lg">
                                                <img
                                                    src={info.img}
                                                    alt=""
                                                    className="rounded-lg w-14 h-14 object-cover object-top"
                                                />
                                            </div>
                                            <div className="info flex flex-col justify-center">
                                                <h1 className="font-primary">{info.name}</h1>
                                                <h2 className="font-secondary">{info.designation}</h2>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
};
