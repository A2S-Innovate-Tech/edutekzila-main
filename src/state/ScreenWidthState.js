import { useState,useEffect } from "react"
import ScreenWidthContext from "../context/ScreenWidthContext";
const ScreenWidthState = (props)=>{
    const [screenWidth,setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <ScreenWidthContext.Provider value={{screenWidth}}>
            {props.children}
        </ScreenWidthContext.Provider>
    )
}

export default ScreenWidthState;