import React from 'react';

const Name = () => {

    const username = localStorage.getItem('username')
    return (
        <div>
           <h2>Hi! {username} </h2>
        </div>
    )
}

export default Name; 