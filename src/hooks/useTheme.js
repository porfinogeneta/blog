import {useContext} from "react";
import {ModeContext} from "../context/ModeContext";

export const useTheme = () => {
    const context = useContext(ModeContext)

    if (context === undefined) {
        console.log('no proper set up')
    }

    return context
}