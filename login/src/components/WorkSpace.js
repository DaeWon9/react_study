import React, { useEffect, useState } from 'react';
import './WorkSpace.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from 'react-modal';
import { useLocation } from "react-router";

let WorkSpace = function () {
    let location = useLocation();
    let loginUserName = location.state.loginUserName;
    let [accessedDepartmentName, setAccessedDepartmentName] = useState("");
    let [modalIsOpen, setModalIsOpen] = useState(false);

    let [chattingData, setChattingData] = useState([
        {
            workspaceId: "1", // 오픈소스과제
            departmentId: "1", //공지방
            email: "test1@naver.com",
            content: "TEST CHAT1",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },
        {
            workspaceId: "1", // 오픈소스과제
            departmentId: "1", //공지방
            email: "test1@naver.com",
            content: "TEST CHAT2",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },
        {
            workspaceId: "1", // 오픈소스과제
            departmentId: "2",
            email: "test1@naver.com",
            content: "TEST CHAT3",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },        
        {
            workspaceId: "1", // 오픈소스과제
            departmentId: "2", 
            email: "test1@naver.com",
            content: "TEST CHAT4",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },        
        {
            workspaceId: "1", // 오픈소스과제
            departmentId: "3", 
            email: "test1@naver.com",
            content: "TEST CHAT5",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        }
    ]);

    let [departmentChattingData, setDepartmentChattingData] = useState([]);

    function setChattingDataEachDepartment(targetDepartmentId) {
        let chatContents = [];
        for (let index = 0; index < chattingData.length; index++){
            if (chattingData[index].departmentId == targetDepartmentId){
                chatContents.push(chattingData[index]);
            }
        }

        let htmlArrayForDepartmentChat = [];

        for (let index = 0; index < chatContents.length; index++){
            let chatContent = chatContents[index].content;
            let chatDate = chatContents[index].date;

            htmlArrayForDepartmentChat.push(
                // chat form
                <div class="media w-50 ml-auto mb-3">
                    <div class="media-body">
                        <div class="bg-primary rounded py-2 px-3 mb-2">
                            <p class="text-small mb-0 text-white">{ chatContent }</p>
                        </div>
                        <p class="small text-muted">{ chatDate }</p>
                    </div>
                </div>
                )
        }

        setDepartmentChattingData(htmlArrayForDepartmentChat);
    }

    let wholeUserData = [
        {
            userEmail: 'test1@naver.com',
            userPassword: 'qwe123!',
            userName: '박대원'
        },
        {
            userEmail: 'test2@naver.com',
            userPassword: 'qwe123@',
            userName: '조형준'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: '박민지'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: '홍영환'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: '조준희'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: '김영림'
        },
    ];

    let [departmentUserData, setDepartmentUserData] = useState([
        {
            userEmail: 'test1@naver.com',
            userPassword: 'qwe123!',
            userName: '조형준'
        },
        {
            userEmail: 'test2@naver.com',
            userPassword: 'qwe123@',
            userName: '박민지'
        },
    ]);

    function setDepartmentUser(departmentId, departmentName) {
        let userData = [
            {
                userEmail: 'test1@naver.com',
                userPassword: 'qwe123!',
                userName: departmentName + ' 조형준'
            },
            {
                userEmail: 'test2@naver.com',
                userPassword: 'qwe123@',
                userName: departmentName + ' 박민지'
            },
        ];
        setAccessedDepartmentName(departmentName);
        setChattingDataEachDepartment(departmentId);
        setDepartmentUserData(userData);
    }

    let workspaceInfo = [
        {
            workspaceId: '1',
            workspaceName: '오픈소스과제',
            workspaceGoal: '오픈소스 프로젝트 제작',
            workspaceDeadline: '2022-10-30'
        }
    ];

    let [departmentInfo, setDepartmentInfo] = useState([
        {
            departmentId: '1',
            departmentName: '📢 공지방',
            departmentGoal: '',
            departmentDeadLine: ''
        },
        {
            departmentId: '2',
            departmentName: '아이디어방',
            departmentGoal: '아이디어 정하기',
            departmentDeadLine: '2022-10-10'
        },
        {
            departmentId: '3',
            departmentName: '코딩방',
            departmentGoal: '프로젝트 완성',
            departmentDeadLine: '2022-10-29'
        }
    ]);
    
    function applyDepartmentList() {
        let htmlArrayForDepartmentList = [];

        for (let index = 0; index < departmentInfo.length; index++) {
            let departmentName = departmentInfo[index].departmentName
            let departmentId = departmentInfo[index].departmentId
            htmlArrayForDepartmentList.push(
                    // departmentList form
                    <div class="list-group rounded-0">
                    <a class="list-group-item list-group-item-action active text-white rounded-0">
                        <h6 class="mb-0" onClick={ () => setDepartmentUser(departmentId, departmentName) }>{ departmentName }</h6>
                    </a>
                    </div>
                )
        }
        return htmlArrayForDepartmentList
    }

    function applyMemberList(userData) {
        let htmlArrayForWholeMemberList = [];

        for (let index = 0; index < userData.length; index++) {
            htmlArrayForWholeMemberList.push(
                    // userCard form
                    <div class="list-group rounded-0">
                    <a class="list-group-item list-group-item-action active text-white rounded-0">
                        <div class="media">
                            <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="25" class="rounded-circle" />

                            <h8 class="mb-0"> { userData[index].userName }</h8>
                        </div>
                    </a>
                    </div>
                )
        }
        return htmlArrayForWholeMemberList
    }

    return(
    <div className="maincontainer">
        <div class="container py-5 px-0">
        
            {/* <header class="text-center">
                <h5 class="display-4 text-white"><strong>loginUser: { loginUserName }</strong></h5>
            </header> */}

            <div class="row rounded-lg overflow-hidden shadow">
                {/* left */}
                <div class="col-1 px-0">
                    <div class="bg-white">
                        <div class="messages-box">
                            <div class="list-group rounded-0">
                            <a class="list-group-item list-group-item-action active text-white rounded-0">
                                ⚙️
                                {/* <div class="media"><img src="" alt="chat" width="50" class="rounded-circle" /></div> */}
                            </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* left center */}
                <div class="col-2 px-0">
                    {/* workspace info */}
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">{ workspaceInfo[0].workspaceName }</p>
                    </div>

                    <div class="messages-box">
                        {/* loginUser info */}
                        <div class="list-group rounded-0">
                        <a class="list-group-item list-group-item-action active text-white rounded-0">
                            <div class="media">
                                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="25" class="rounded-circle" />
                                <h8 class="mb-0">{ loginUserName }</h8>
                            </div>
                        </a>
                        </div>
                    
                        {/* department List */}
                        <div class="bg-gray px-4 py-2 bg-light">
                            <p class="h7 mb-0 py-1">DepartmentList <button onClick={()=> setModalIsOpen(true)}>+</button> </p>
                            {/* <Modal isOpen={true}>
                                This is Modal content
                                <button onClick={()=> setModalIsOpen(false)}>+</button>
                            </Modal> */}
                        </div>

                        { applyDepartmentList() }
                        
                        {/* whole member List */}
                        <div class="bg-gray px-4 py-2 bg-light">
                            <p class="h7 mb-0 py-1">WholeMemberList</p>
                        </div>

                        { applyMemberList(wholeUserData) }

                    </div>
                </div>

                {/* right center */}
                <div class="col-7 px-0">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">{ accessedDepartmentName } </p>
                    </div>

                    <div class="px-4 py-5 chat-box bg-white">
                        { departmentChattingData }
                    </div>

                
                    <form action="#" class="bg-light">
                    <div class="input-group">
                        <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" />
                        <div class="input-group-append">
                        <button id="button-addon2" type="button" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
                        </div>
                    </div>
                    </form>

                </div>
                
                {/* right */}
                <div class="col-2 px-0">

                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1"> 참여자 </p>
                    </div>

                    { applyMemberList(departmentUserData) }

                </div>

            </div>
        </div>

    </div>
    );
}

export default WorkSpace;