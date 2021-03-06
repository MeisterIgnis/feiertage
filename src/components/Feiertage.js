import React, { useEffect } from 'react';
import { fetchStart } from '../actions/actions.js';
import '../css/App.css'

const cellClass = "border px-4 py-2 cell";
const hinweisCell = "border px-4 py-2 text-xs cell"

const Entry = (item) => {
    //console.log(item)
    const { name, datum, hinweis } = item.data
    return (
        <tbody>
            <tr>
                <td className={cellClass}>{datum}</td>
                <td className={cellClass}>{name}</td>
                <td className={hinweisCell}>{hinweis}</td>
            </tr>
        </tbody>
    )
}

export default function ({ items, dispatch }) {
    useEffect(() => {
        dispatch(fetchStart())
    }, [dispatch]);

    return (
        <div>
            
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className={cellClass}>Datum</th>
                        <th className={cellClass}>Feiertage</th>
                        <th className={cellClass}>Hinweis</th>
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

