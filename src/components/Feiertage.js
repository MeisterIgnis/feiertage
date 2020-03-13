import React, { useEffect } from 'react';
import { fetchStart } from '../actions/actions.js';

const cellClass = "border px-4 py-2";

const Entry = (item) => {
    console.log(item)
    const { name, datum, hinweis } = item.data
    return (
        <tr>
            <td className={cellClass}>{datum}</td>
            <td className={cellClass}>{name}</td>
        </tr>
    )
}

export default function ({ items, dispatch }) {
    useEffect(() => {
        dispatch(fetchStart())
    }, []);
    console.log(items)
    return (
        <div>
            <table className="table-fixed">
                <tr>
                    <th className={cellClass}>Datum</th>
                    <th className={cellClass}>Feiertage</th>
                </tr>
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

