import react,{useState} from 'react'
import './css/Nav.css'

export default function Nav(){
    const [Sidebar, SidebarOn] =useState(false);
    function onon(){
        SidebarOn(true);
    }
    return (
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
            <div className={Sidebar?"sidebar-on":""}>
                this is sidebar
            </div>
        </nav>
    )
}
