import React from 'react';

export const Select = (props)=> {

    const { handlehange, selectStyle } = props;

    return <div>
                <select style={selectStyle} onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
}