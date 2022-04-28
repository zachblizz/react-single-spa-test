import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav
            style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                padding: "10px 0",
            }}
        >
            <Link style={{ marginRight: 5 }} to="/react-test/home">
                Home
            </Link>
            <Link style={{ marginRight: 5 }} to="/react-test/about">
                About
            </Link>
        </nav>
    );
}
