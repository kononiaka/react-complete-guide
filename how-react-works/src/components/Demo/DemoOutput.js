import React, { useMemo } from 'react';
// import ManagedParagraph from './ManagedParagraph';

import classList from "./DemoList.module.css";

const DemoOutput = (props) => {
    const { items } = props;

    console.log("DemoOutput running");
    const sortedList = useMemo(() => items.sort((a, b) => b - a), [items]);

    return (
        <div className={classList.list}>
            <h2>{props.title}</h2>
            <ul>{sortedList.map(item => {
                return <li key={item}>{item}</li>;
            })}</ul>
        </div>
    );
};

export default React.memo(DemoOutput);