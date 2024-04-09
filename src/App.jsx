import { useState } from "react";
import GamePage from "./components/GamePage";
import DicePage from "./components/DicePage";
import { UserContextProvider } from "./context/UserProvider";
import {Cloudinary} from "@cloudinary/url-gen"

function App() {
    const [isGameStarted, setIsGameStarted] = useState(false);

    const cloudAsset = new Cloudinary({cloud: {cloudName: 'dfdjmelwo'}})

    return (
        <UserContextProvider>
            {isGameStarted === false && (
                <GamePage setDicePage={setIsGameStarted} />
            )}
            {isGameStarted === true && (
                <DicePage setDicePage={setIsGameStarted} />
            )}
        </UserContextProvider>
    );
}

export default App;
