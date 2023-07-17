import React from 'react';

export default function Post({ title, text}) {

    return (
        <div>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )
}
