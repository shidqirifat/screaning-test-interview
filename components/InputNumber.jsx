import React from "react";

export default function InputNumber({ onChange, counter }) {
    return (
        <input
            className="input-number"
            type="text"
            value={counter}
            onChange={onChange}
        />
    );
}
