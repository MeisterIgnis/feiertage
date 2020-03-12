import React, { useEffect } from 'react';
import { fetchStart } from '../actions/actions.js';

const Entry = (item) => {
    console.log(item)
        const {name,datum,hinweis} = item.data
        return (
        <li>{datum}{name}</li>
        )
}

export default function ({ items, dispatch }) {
    useEffect(() => {
        dispatch(fetchStart())
    }, []);
    console.log(items)
    return (
        <div>
            <ul>
                {
                    items.map((e, i) =>
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

