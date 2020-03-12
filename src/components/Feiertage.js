import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchStart} from '../actions/actions.js';


export default function ({items,dispatch})
{
    useEffect(() => {
        dispatch(fetchStart())
      },[]);
    

    console.table(items);
    return(
        <div>
            <ul>
                <li>Montag</li>
                <li>Dienstag</li>
            </ul>
        </div>
    )
}

/*function componentDidMount() {
    props.dispatch(fetchStart());
}*/

