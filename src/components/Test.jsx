import React, { useState } from 'react';
import { useParams } from 'react-router';

const Test = (props) => {
//     const [vName,setVName] = useState('');
    const {id} = useParams();
    const {font} = useParams();
    const {bg} = useParams();
    
    return (
        <div>
            {
                isNaN(id)
                ?<h1 style={{backgroundColor:bg, color:font}}>The word is: {id}</h1>
                :<h1>The number is #{id}</h1>
            }
        </div>
    );
}

export default Test;