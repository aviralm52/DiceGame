import React from "react";
import { useState } from "react";

function NumberBar({ handleSelectedNumber, selectedNumber, totalScore }) {
    return (
        <nav className=" w-[1280px] flex justify-between ">
            <div className="flex flex-col items-center justify-start ">
                <h1 className=" font-medium text-8xl leading-[0.7]">{totalScore}</h1>
                <h2 className=" font-medium text-2xl mt-2">Total Score</h2>
            </div>

            <div className="flex flex-col justify-between gap-7">
                <div className="flex gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <p
                            key={index}
                            className={` w-[72px] h-[72px] border border-black flex justify-center items-center font-semibold text-2xl hover:shadow-sm hover:shadow-purple-500 cursor-pointer ${
                                item === selectedNumber && "bg-black text-white"
                            }`}
                            onClick={() => handleSelectedNumber(item)}
                        >
                            {item}
                        </p>
                    ))}
                </div>
                <div className=" self-end">
                    <p className=" font-bold text-2xl">Select Number</p>
                </div>
            </div>
        </nav>
    );
}

export default NumberBar;
