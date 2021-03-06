import React from 'react';

export default function ({setStateFilter, state,value}) {

    const states = state.states
    return ( 
        <div>
            <select onChange={e => setStateFilter(e.target.value)} value={value}>
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

