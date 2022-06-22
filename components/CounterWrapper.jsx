import React from "react";
import Button from "./Button";
import InputNumber from "./InputNumber";
// import PlusIcon from "./images/plus.svg";

export default function CounterWrapper({
    counter,
    onChange,
    onIncrease,
    onDecrease,
}) {
    return (
        <div className="counter">
            <Button onClick={onDecrease}>
                <img src="/images/minus.svg" alt="minus" />
            </Button>
            <InputNumber counter={counter} onChange={onChange} />
            <Button onClick={onIncrease}>
                <img src="/images/plus.svg" alt="plus" />
            </Button>
        </div>
    );
}
