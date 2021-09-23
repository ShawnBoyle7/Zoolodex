import React, { useState } from "react";
import { useSelector } from "react-redux";

const Animal = () => {
    const animals = useSelector(state => state.animals)
    console.log(animals)
    return (
        <>
            
        </>
    )
}

export default Animal