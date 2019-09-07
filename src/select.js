import React from 'react';

export const Select = (props)=> {
console.log(props)
    const { handleChange, selectStyle } = props;

    return <div>
                <select style={selectStyle} onChange={handleChange}>
                    <option>Select Option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
}