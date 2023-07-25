import React, { useContext } from 'react'
import {AppState} from '../App';
import { NameContext } from '../App';
const ComC = () => {
    const appData = useContext(AppState);
    const name = useContext(NameContext);
    return (
        <>
            <div className='ComC'>
                <div>
                    Component C
                </div>
                <h2>{appData}</h2>
                <h2>{name.name}</h2>
                <h2>{name.age}</h2>
                
            </div>
           
        </>

    )
}

export default ComC
