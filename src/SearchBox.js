import React from "react";

const search = ({searchfield, searchchange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type="search"
                placeholder="Search robots"
                onChange={searchchange}
            />
        </div>

    );
}

export default search;