import React from 'react';
import './WorkSpace.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useLocation } from "react-router";


const WorkSpace = function () {
    const location = useLocation();
    const loginUserName = location.state.loginUserName;

    return(
    <div className="maincontainer">
        <div class="container py-5 px-0">
        
            <header class="text-center">
                <h5 class="display-4 text-white"><strong>loginUser: { loginUserName }</strong></h5>
            </header>

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
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">WorkSpace</p>
                    </div>

                    <div class="messages-box">
                        {/* workspace info */}
                        <div class="list-group rounded-0">
                        <a class="list-group-item list-group-item-action active text-white rounded-0">
                            <div class="media">
                                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                                <h8 class="mb-0">TestUser</h8>
                            </div>
                        </a>
                        </div>
                    
                        {/* department List */}
                        <div class="bg-gray px-4 py-2 bg-light">
                            <p class="h7 mb-0 py-1">DepartmentList</p>
                        </div>

                        <div class="list-group rounded-0">
                        <a class="list-group-item list-group-item-action active text-white rounded-0">
                            <h6 class="mb-0">📢 NoticeRoom</h6>
                        </a>
                        </div>
                        
                        {/* whole member List */}
                        <div class="bg-gray px-4 py-2 bg-light">
                            <p class="h7 mb-0 py-1">MemberList</p>
                        </div>

                        <div class="list-group rounded-0">
                        <a class="list-group-item list-group-item-action active text-white rounded-0">
                            <div class="media">
                                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                                <h8 class="mb-0">TestUser</h8>
                            </div>
                        </a>
                        </div>

                    </div>
                </div>

                {/* right center */}
                <div class="col-7 px-0">
                    <div class="bg-gray px-4 py-2 bg-light">
                        <p class="h5 mb-0 py-1">📢 NoticeRoom</p>
                    </div>

                    <div class="px-4 py-5 chat-box bg-white">
                        
                        <div class="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                            <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">T</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        
                        <div class="media w-50 ml-auto mb-3">
                            <div class="media-body">
                            <div class="bg-primary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">E</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                    
                        <div class="media w-50 mb-3"><img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                            <div class="media-body ml-3">
                            <div class="bg-light rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-muted">S</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        
                        <div class="media w-50 ml-auto mb-3">
                            <div class="media-body">
                            <div class="bg-primary rounded py-2 px-3 mb-2">
                                <p class="text-small mb-0 text-white">T</p>
                            </div>
                            <p class="small text-muted">12:00 PM | Aug 13</p>
                            </div>
                        </div>

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
                        <p class="h5 mb-0 py-1">MemberList</p>
                    </div>

                    <div class="messages-box">
                        <div class="list-group rounded-0">
                            <a class="list-group-item list-group-item-action active text-white rounded-0">
                                <div class="media">
                                    <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" alt="user" width="50" class="rounded-circle" />
                                    <h8 class="mb-0">TestUser</h8>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
    );
}

export default WorkSpace;