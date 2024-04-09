import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [diceNumber, setDiceNumber] = useState({diceNum: 1, urlNum: "v1712676353"});
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [totalScore, setTotalScore] = useState(0);
    const [rules, setRules] = useState(false);
    const [clickedDiceWithoutNumber, setClickedDiceWithoutNumber] =
        useState(false);

    const diceUrlNumbers = {
        1: "v1712676353",
        2: "v1712676356",
        3: "v1712676359",
        4: "v1712676362",
        5: "v1712676366",
        6: "v1712676369",
    }           //! These are the part of url which are unique for each dice image
    const {diceNum, urlNum} = diceNumber;
    
    const handleDice = () => {
        let num = Math.floor(Math.random() * 6) + 1;
        if (selectedNumber === null) setClickedDiceWithoutNumber(true);
        else setDiceNumber({diceNum: num, urlNum: diceUrlNumbers[num]});
    };

    const selectNumber = (item) => {
        // setSelectedNumber(item === selectedNumber ? null : item)
        if (item === selectedNumber) {
            setSelectedNumber(null);
            setClickedDiceWithoutNumber(false);
        } else setSelectedNumber(item);
    };

    const resetScore = () => {
        setTotalScore(0); //! setting total score to 0
        setSelectedNumber(null); //! resetting the selected number
        setDiceNumber({diceNum: 1, urlNum: "v1712676353"}); //! setting dice value to 1 after resetting the score
        setClickedDiceWithoutNumber(false); //! this is done because when we click resetScore button then total score sets to 0 but errormsg(<SelectNumMsg/>): number not selected gets displayed which should not
    };

    useEffect(() => {
        if (selectedNumber === diceNum) {
            setTotalScore((prev) => prev + diceNum);
        } else if (selectedNumber == null) {
            setTotalScore(0);
        } else {
            setTotalScore((prev) => prev - diceNum);
        }
    }, [diceNumber]);

    return (
        <UserContext.Provider
            value={{
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserContextProvider };
