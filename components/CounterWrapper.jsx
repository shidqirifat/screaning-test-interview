import React from "react";
import Button from "./Button";
import InputNumber from "./InputNumber";
import Image from "next/dist/client/image";

export default function CounterWrapper({
    counter,
    onChange,
    onIncrease,
    onDecrease,
}) {
    return (
        <div className="counter">
            <Button onClick={onDecrease}>
                <Image
                    width={12}
                    height={12}
                    src="/images/minus.svg"
                    alt="minus"
                />
            </Button>
            <InputNumber counter={counter} onChange={onChange} />
            <Button onClick={onIncrease}>
                <Image
                    width={12}
                    height={12}
                    src="/images/plus.svg"
                    alt="plus"
                />
            </Button>
        </div>
    );
}
