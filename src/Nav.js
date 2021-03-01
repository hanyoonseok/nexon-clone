import react,{useState} from 'react'
import './css/Nav.css'

export default function Nav(){
    const [Sidebar, SidebarOn] =useState(false);
    function onon(){
        SidebarOn(true);
    }
    function offoff(){
        SidebarOn(false);
    }
    return (
        <>
        <nav className="nav-container">
            <div className="nav-menu">
                <i className="fas fa-bars" onClick={SidebarOn}> 메뉴</i>  
            </div>
            <div className="nav-title">
                NEXON
            </div>
            <div>
                <ul className="nav-lists">
                    <li>PC방 OFF</li>
                    <li>회원가입</li>
                    <li className="nav-login"><button>로그인</button></li>
                </ul>
            </div>
        </nav>
        <div className={Sidebar?"sidebar-on":"sidebar-off"}>
            <div className="sidebar-top">
                <i class="fas fa-times" onClick={offoff}></i>
            </div>
            <div className="sidebar-mid">
                <div className="sidebar-mid-title">
                    <div className="sidebar-mid-category">
                        <button>PC게임</button>
                        <button>모바일게임</button>
                    </div>
                    <div className="sidebar-mid-call">
                        <button>고객센터</button>
                    </div>
                </div>
                <div className="sidebar-mid-games">
                    <div className="game-list">
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                    <div className="game-list">
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                        <h3>A~Z</h3>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="sidebar-bottom-services">
                    <ul>
                        <li>내정보</li>
                        <li>이벤트</li>
                        <li>넥슨캐시</li>
                        <li>보안센터</li>
                        <li>공지사항</li>
                        <li>넥슨플러그</li>
                        <li>고객센터</li>
                        <li>넥슨달력</li>
                        <li>넥슨플레이</li>
                    </ul>
                </div>
                <div className="sidebar-bottom-all">전체서비스</div>
            </div>
        </div>
        <div className={Sidebar?"background-cover":""} onClick={offoff}></div>
        </>
    )
}
