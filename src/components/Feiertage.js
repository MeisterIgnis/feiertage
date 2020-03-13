import React, { useEffect } from 'react';
import { fetchStart } from '../actions/actions.js';

const cellClass = "border px-4 py-2";

const Entry = (item) => {
    //console.log(item)
    const { name, datum, hinweis } = item.data
    return (
        <tbody>
            <tr>
                <td className={cellClass}>{datum}</td>
                <td className={cellClass}>{name}</td>
                <td className={cellClass}>{hinweis}</td>
            </tr>
        </tbody>
    )
}

export default function ({ items, dispatch }) {
    useEffect(() => {
        dispatch(fetchStart())
    }, []);
    
    
    console.log(items)
    const items2 = items[0]
    console.log(items2)


    //const items2 = items[16];
    //console.log(items2)
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className={cellClass}>Datum</th>
                        <th className={cellClass}>Feiertage</th>
                    </tr>
                </thead>
                {
                    items.map((e, i) =>
                        <Entry
                            key={i}
                            data={e}
                        />
                    )
                }
            </table>
        </div>
    )
}

