import React from 'react'


const Card = ({ profilePicture, name, role}) => (
    <div>
        <img src={profilePicture} alt="user" width="25" className="rounded-circle" /><br />
        {name}<br />
        {role}<br />
    </div>
)

export default Card