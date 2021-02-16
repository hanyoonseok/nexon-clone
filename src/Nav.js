import react from 'react'
import './css/Nav.css'

export default function Nav(){
    return (
        <nav className="nav-container">
            <div className="nav-menu">
                <i className="fas fa-bars"> 메뉴</i>  
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
    )
}
