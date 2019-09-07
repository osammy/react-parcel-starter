import React from 'react';


export const Select = (props)=> {
    const { handleChange, selectStyle, selectoptions } = props;

    return <div>
                <select style={selectStyle} onChange={handleChange} selectoptions={selectoptions}>
                    <option>Select Option</option>
                    {
                        selectoptions.map((value,i) => <option key={i}>{value}</option>)
                    }

                </select>
            </div>
}