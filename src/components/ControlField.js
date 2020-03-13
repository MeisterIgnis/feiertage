import React, { useEffect } from 'react';
import { fetchStart } from '../actions/actions.js';




export default function ({setStateFilter, state}) {

    const states = state.states
    return ( 
        <div>
            <select onChange={e => setStateFilter(e.target.value)}>
                {states.map(state => (
                    <option value={states.indexOf(state)} key={state}>
                        {state}
                    </option>
                ))

                }
            </select>
        </div>
    )
}

