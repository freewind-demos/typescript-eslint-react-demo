import React, {FC, useEffect, useState} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [text, setText] = useState('')

    useEffect(() => {
        console.log("### text", text);
    }, [])

    return <div className={'Hello'}>
        <h1>Hello <input type={"text"} value={text} onChange={event => setText(event.target.value)}/></h1>
        <h2>{text}</h2>
    </div>;
}
