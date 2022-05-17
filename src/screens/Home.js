import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/react-test/about');
    }

    return (
        <div
            style={{
                fontSize: 20,
                color: "orange",
            }}
        >
            Home Screen
            <button onClick={handleClick}>about</button>
        </div>
    );
}
