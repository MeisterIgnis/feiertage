import React, { useEffect } from 'react';
import { fetchStart } from '../actions/actions.js';

const Entry = (items) => {

    if (items !== undefined) {
        return (
            <li>{items.data}</li>
        )
    }
}

export default function ({ items, dispatch }) {
    useEffect(() => {
        dispatch(fetchStart())
    }, []);

    return (
        <div>
            <ul>
                {
                    Object.keys(items).map((e, i) =>
                        <Entry
                            key={i}
                            data={e}
                        />
                    )
                }
            </ul>
        </div>
    )
}

