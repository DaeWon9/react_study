import React from "react";
import Card from "./Card";

const MemberCard = ({ member, onMemberCardClicked }) => {
    return(
        <div>
            <Card
                profilePicture='https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
                name='qwe'
                // name={member.name}
                // role={member.role}
                onClicked={onMemberCardClicked}
            />
        </div>
    )
}

export default MemberCard