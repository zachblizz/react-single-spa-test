import React from "react";
import { useParams } from "react-router";

export default function Testing() {
    const { id } = useParams();

    return (
        <div
            style={{
                fontSize: 20,
                color: "purple",
            }}
        >
            Testing {id}
        </div>
    );
}
