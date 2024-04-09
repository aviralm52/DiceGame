import React from "react";

function ShowRules() {
    return (
        <div className="flex flex-col mt-16">
            <h1 className="font-bold text-xl">How to Play a dice Game</h1>
            <p className=" font-medium">Select any number</p>
            <p className=" font-medium">Click on dice image</p>
            <p className=" font-medium">After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p className=" font-medium">if you get wrong guess then the points shown on dice will be deducted from the total score </p>
        </div>
    );
}

export default ShowRules;
