import React from "react";
import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate();

    function onClick() {
        navigate("/react-test/testing/" + 1234);
    }

    return (
        <div
            style={{
                fontSize: 20,
                color: "purple",
            }}
        >
            <div>About Screen</div>
            <button onClick={onClick}>test route params</button>
        </div>
    );
}
