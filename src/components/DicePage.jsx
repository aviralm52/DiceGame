import React, { useContext } from "react";
import NumberBar from "./NumberBar";
import { useState } from "react";
import { useEffect } from "react";
import ShowRules from "./ShowRules";
import SelectNumMsg from "./SelectNumMsg";
import { FaHome } from "react-icons/fa";
import { UserContext } from "../context/UserProvider";

function DicePage({ setDicePage }) {
    const {
        diceNumber,
        setDiceNumber,
        selectedNumber,
        setSelectedNumber,
        totalScore,
        setTotalScore,
        rules,
        setRules,
        clickedDiceWithoutNumber,
        setClickedDiceWithoutNumber,
        handleDice,
        selectNumber,
        resetScore,
    } = useContext(UserContext);

    const {diceNum, urlNum} = diceNumber;

    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div
                className=" self-start absolute top-8 left-8 hover:cursor-pointer {styles.iconShadow}"
                onClick={() => setDicePage(false)}
            >
                <FaHome size={80} />
            </div>
            {selectedNumber === null && clickedDiceWithoutNumber && (
                <SelectNumMsg />
            )}
            <div className="mt-16">
                <NumberBar
                    handleSelectedNumber={selectNumber}
                    selectedNumber={selectedNumber}
                    totalScore={totalScore}
                />
            </div>
            <div className="flex flex-col items-center w-[250px] mt-12">
                <img
                    // src={`../src/images/dice_${diceNumber}.png`}
                    src={`https://res.cloudinary.com/dfdjmelwo/image/upload/${urlNum}/DiceGame/dice_${diceNum}.png`}
                    className="w-[250px] h-[250px] hover:cursor-pointer"
                    onClick={handleDice}
                />
                <h2 className=" font-semibold text-2xl mt-4">
                    Click on Dice to roll
                </h2>
                <button
                    className=" border-2 border-black px-5 py-3 rounded-md w-52 mt-9 hover:shadow-md hover:shadow-black"
                    onClick={resetScore}
                >
                    Reset Score
                </button>
                <button
                    className={`bg-black text-white px-5 py-3 rounded-md w-52 mt-6 mb-2 hover:shadow-md hover:shadow-black`}
                    onClick={() => setRules((prev) => !prev)}
                >
                    Show Rules
                </button>
            </div>
            {rules && <ShowRules />}
        </div>
    );
}

export default DicePage;
