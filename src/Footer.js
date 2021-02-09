import react from 'react'
import './css/Footer.css'

export default function Footer(){
    return (
        <>
            <div className="top">
                <div className="gongji">[공지] 설 연휴 고객센터 휴무 안내 2월11일(목)~2월13일(토)</div>
                <div className="icons">
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook-f"></i>
                    </div>
            </div>
            <div className="foot">
                <div>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>청소년보호정책</li>
                        <li>게임IP사용가이드</li>
                        <li>게임시간선택제</li>
                        <li>고객센터</li>
                        <li>전체서비스</li>
                    </ul>
                    <ul>
                        <li>회사소개</li>
                        <li>채용안내</li>
                        <li>윤리경영</li>
                        <li>LEVEL UP(넥슨폰트)</li>
                        <li>광고문의</li>
                        <li>넥슨PC방</li>
                    </ul>
                </div>
                <div className="detail">
                    <p>
                    ㈜넥슨코리아 대표이사 이정헌 경기도 성남시 분당구 판교로 256번길 7 전화 : 1588-7701 팩스 : 0502-258-8322<br/>
                    E-mail : contact-us@nexon.co.kr 사업자등록번호 : 220-87-17483호 통신판매업 신고번호 : 제2013-경기성남-1659호 사업자정보확인<br/>
                    © NEXON Korea Corporation All Rights Reserved.
                    </p>
                </div>
                <img src="sources/nexon.png" alt=""/>
            </div>
        </>
    )
}
