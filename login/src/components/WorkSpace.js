import React, { useEffect, useState } from 'react';
import './WorkSpace.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from 'react-modal';
// import 'react-chatbox-component/dist/style.css';
// import {ChatBox} from 'react-chatbox-component';
import { useLocation } from "react-router";

let WorkSpace = function () {
    let location = useLocation();
    let loginUserName = location.state.loginUserName;
    let loginUserEmail = location.state.loginUserEmail;
    let [accessedDepartmentName, setAccessedDepartmentName] = useState("π’ κ³΅μ§λ°©");
    let [accessedDepartmentId, setAccessedDepartmentId] = useState("1");
    let [modalIsOpen, setModalIsOpen] = useState(false);
    let [inputChattingContent,  setInputChattingContent] = useState("");

    let [chattingData, setChattingData] = useState([
        {
            workspaceId: "1", // μ€νμμ€κ³Όμ 
            departmentId: "1", //κ³΅μ§λ°©
            email: "test1@naver.com",
            sender: "λ°λμ",
            content: "TEST CHAT1",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },
        {
            workspaceId: "1", // μ€νμμ€κ³Όμ 
            departmentId: "1", //κ³΅μ§λ°©
            email: "test1@naver.com",
            sender: "λ°λμ",
            content: "TEST CHAT2",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },
        {
            workspaceId: "1", // μ€νμμ€κ³Όμ 
            departmentId: "2",
            email: "test1@naver.com",
            sender: "λ°λμ",
            content: "TEST CHAT3",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },        
        {
            workspaceId: "1", // μ€νμμ€κ³Όμ 
            departmentId: "2", 
            email: "test1@naver.com",
            sender: "λ°λμ",
            content: "TEST CHAT4",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        },        
        {
            workspaceId: "1", // μ€νμμ€κ³Όμ 
            departmentId: "3", 
            email: "test1@naver.com",
            sender: "λ°λμ",
            content: "TEST CHAT5",
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        }
    ]);

    function addChattingDataToDB(chatContent) {
        let copiedChattingData = [...chattingData];
        copiedChattingData.push({
            workspaceId: "1",
            departmentId: accessedDepartmentId, 
            email: loginUserEmail,
            sender: loginUserName,
            content: chatContent,
            date: "2022-10-11",
            content_type: "TEXT",
            link: "",
        })

        setChattingData(copiedChattingData);
    }

    useEffect( () => {
        setDepartmentScreen(accessedDepartmentId, accessedDepartmentName);
    }, [chattingData]);

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
            let chatSender = chatContents[index].sender;

            htmlArrayForDepartmentChat.push(
                // chat form
                <div class="media w-50 ml-auto mb-3">
                    <div class="media-body">
                        <p class="small text-muted">{ chatSender }</p>
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
            userName: 'λ°λμ'
        },
        {
            userEmail: 'test2@naver.com',
            userPassword: 'qwe123@',
            userName: 'μ‘°νμ€'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: 'λ°λ―Όμ§'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: 'νμν'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: 'μ‘°μ€ν¬'
        },
        {
            userEmail: 'test3@naver.com',
            userPassword: 'qwe123#',
            userName: 'κΉμλ¦Ό'
        },
    ];

    let [departmentUserData, setDepartmentUserData] = useState([
        {
            userEmail: 'test1@naver.com',
            userPassword: 'qwe123!',
            userName: 'μ‘°νμ€'
        },
        {
            userEmail: 'test2@naver.com',
            userPassword: 'qwe123@',
            userName: 'λ°λ―Όμ§'
        },
    ]);

    function setDepartmentScreen(departmentId, departmentName) {
        let userData = [
            {
                userEmail: 'test1@naver.com',
                userPassword: 'qwe123!',
                userName: departmentName + ' μ‘°νμ€'
            },
            {
                userEmail: 'test2@naver.com',
                userPassword: 'qwe123@',
                userName: departmentName + ' λ°λ―Όμ§'
            },
        ];
        setAccessedDepartmentName(departmentName);
        setAccessedDepartmentId(departmentId);
        setChattingDataEachDepartment(departmentId);
        setDepartmentUserData(userData);
    }

    let workspaceInfo = [
        {
            workspaceId: '1',
            workspaceName: 'μ€νμμ€κ³Όμ ',
            workspaceGoal: 'μ€νμμ€ νλ‘μ νΈ μ μ',
            workspaceDeadline: '2022-10-30'
        }
    ];

    let [departmentInfo, setDepartmentInfo] = useState([
        {
            departmentId: '1',
            departmentName: 'π’ κ³΅μ§λ°©',
            departmentGoal: '',
            departmentDeadLine: ''
        },
        {
            departmentId: '2',
            departmentName: 'μμ΄λμ΄λ°©',
            departmentGoal: 'μμ΄λμ΄ μ νκΈ°',
            departmentDeadLine: '2022-10-10'
        },
        {
            departmentId: '3',
            departmentName: 'μ½λ©λ°©',
            departmentGoal: 'νλ‘μ νΈ μμ±',
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
                        <h6 class="mb-0" onClick={ () => setDepartmentScreen(departmentId, departmentName) }>{ departmentName }</h6>
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

                            <h7 class="mb-0"> { userData[index].userName }</h7>
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
                                βοΈ
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
                                <h7 class="mb-0">{ loginUserName }</h7>
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

                
                    <form class="bg-light">
                        <div class="input-group">
                            <input type="text" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light" value={ inputChattingContent }
                                onChange={e => setInputChattingContent(e.target.value)}/>
                            <div class="input-group-append">
                            <button id="button-addon2" type="button" class="btn btn-link" onClick={ () => addChattingDataToDB(inputChattingContent) }> send <i class="fa fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </form>

                </div>
                
                {/* right */}
                <div class="col-2 px-0">

                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1"> μ°Έμ¬μ </p>
                    </div>

                    { applyMemberList(departmentUserData) }

                </div>

            </div>
        </div>

    </div>
    );
}

export default WorkSpace;