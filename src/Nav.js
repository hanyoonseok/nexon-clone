import react,{useState,useEffect} from 'react'
import './css/Nav.css'

export default function Nav(){
    const [Sidebar, SidebarOn] =useState(false);
    useEffect(() => {
        document.body.classList.toggle('bon',Sidebar);
    },[Sidebar])
    
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
                            <li>EA SPORTS FIFA ONLINE 4</li>
                            <li>V4</li>
                        </ul>
                        <h3>ㄱ~ㄹ</h3>
                        <ul>
                            <li>던전앤파이터</li>
                            <li>드래곤네스트</li>
                        </ul>
                        <h3>ㅁ~ㅅ</h3>
                        <ul>
                            <li>마비노기</li>
                            <li>마비노기영웅전</li>
                            <li>메이플스토리</li>
                            <li>메이플스토리2</li>
                            <li>바람의나라</li>
                            <li>버블파이터</li>
                            <li>사이퍼즈</li>
                            <li>서든어택</li>
                        </ul>
                    </div>
                    <div className="game-list">
                        <h3>ㅇ~ㅈ</h3>
                        <ul>
                            <li>아스가르드</li>
                            <li>아키에이지</li>
                            <li>어둠의전설</li>
                            <li>엘소드</li>
                            <li>일랜시아</li>
                        </ul>
                        <h3>ㅊ~ㅋ</h3>
                        <ul>
                            <li>천애명월도</li>
                            <li>카운터스트라이크온라인</li>
                            <li>카트라이더</li>
                            <li>카트라이더: 드리프트</li>
                            <li>커즈펠</li>
                            <li>크레이지아케이드</li>
                            <li>클로저스</li>
                        </ul>
                        <h3>ㅌ~ㅎ</h3>
                        <ul>
                            <li>테일즈런너</li>
                            <li>테일즈위버</li>
                            <li>트리오브세이비어</li>
                            <li>파이널판타지14</li>
                            <li>프리스타일2</li>
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
