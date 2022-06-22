import React from "react";

export default function InputNumber({ onChange, counter }) {
    return (
        <input
            className="input-number"
            type="number"
            value={counter}
            onChange={onChange}
        />
    );
}
