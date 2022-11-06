import React from "react";
import {useEffect, useState} from "react"

function BackToTopButton() {
    const [backToTopButton, setBacktoTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBacktoTopButton(true)
            } else {
                setBacktoTopButton(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="App">
        {backToTopButton && (
            <button className="scrollbuton"
            onClick={scrollUp}
            >^</button> 
        )}
            </div>;
}

export default BackToTopButton;