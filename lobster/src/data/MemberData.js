
let memberData = [
    {
        email: 'test1@naver.com',
        password: 'qwe123!',
        name: '박대원',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
    {
        email: 'test2@naver.com',
        password: 'qwe123@',
        name: '조형준',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
    {
        email: 'test3@naver.com',
        password: 'qwe123#',
        name: '박민지',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
    {
        email: 'test4@naver.com',
        password: 'qwe123$',
        name: '홍영환',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
    {
        email: 'test5@naver.com',
        password: 'qwe123%',
        name: '조준희',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
    {
        email: 'test6@naver.com',
        password: 'qwe123^',
        name: '김영림',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
    {
        email: 'test7@naver.com',
        password: 'qwe123&',
        name: '테스터',
        profilePicture: 'https://therichpost.com/wp-content/uploads/2020/06/avatar2.png'
    },
];

export function getMemberData() {
    return memberData;
}

export function getMemberName(email) {
    for (let index = 0; index < memberData.length; index++){
        if (memberData[index].email === email){
            return memberData[index].name;
        }
    }
    return "";
}

