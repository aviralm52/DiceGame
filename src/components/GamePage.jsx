import React from "react";

function GamePage({ setDicePage }) {
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className="flex">
                <div className=" w-[649px] h-[522px]">
                    {/* <img src="../src/images/dices.png" /> */}
                    <img src="https://res.cloudinary.com/dfdjmelwo/image/upload/v1712676378/DiceGame/dices_qwgl40.png" />
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className=" text-8xl font-bold">DICE GAME</h1>
                    <button
                        className=" px-4 py-3 mt-2 bg-black text-white w-56 self-end hover:shadow-lg hover:shadow-emerald-900"
                        onClick={() => setDicePage(true)}
                    >
                        Play Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GamePage;
