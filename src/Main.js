import react from 'react'
import './css/Main.css'
import Tube from './Tube'
import Slider from './Slider'

export default function Main(){
    return(
        <div className="main-container">
            <div className="main-screen">
                <div className="main-screen-youtube">
                    <Tube/>
                </div>
                <div className="main-screen-btns">
                    <Slider/>
                </div>
            </div>
            <div className="sub-screen">
                <div className="recommend">
                    <div className="rec-title">
                        <div className="rec-title-big">
                            추천게임
                        </div>
                        <div className="rec-title-small">
                            <ul>
                                <li>고객센터</li>
                                <li>보안센터</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rec-cards-list">
                        <div className="rec-cards">
                            <div className="img-wrap">
                                <img src="sources/kart.jpg"/>
                            </div>
                            <div className="rec-cards-detail">
                                <div>
                                    <div className="rec-cards-rec">추천</div>
                                    <h3>카트라이더</h3>
                                </div>
                                <h6>이벤트 진행중인</h6>
                            </div>
                        </div>
                        <div className="rec-cards">
                            <div className="img-wrap">
                                <img src="sources/sudden.png"/>
                            </div>
                            <div className="rec-cards-detail">
                                <div>
                                    <div className="rec-cards-rec">추천</div>
                                    <h3>서든어택</h3>
                                </div>
                                <h6>최근 게이머가 많은</h6>
                            </div>
                        </div>
                        <div className="rec-cards">
                            <div className="img-wrap">
                                <img src="sources/fifa.jpg"/>
                            </div>
                            <div className="rec-cards-detail">
                                <div>
                                    <div className="rec-cards-rec">추천</div>
                                    <h3>피파온라인</h3>
                                </div>
                                <h6>최근 게이머가 많은</h6>
                            </div>
                        </div>
                        <div className="rec-cards">
                            <div className="img-wrap">
                                <img src="sources/cheon.jpg"/>
                            </div>
                            <div className="rec-cards-detail">
                                <div>
                                    <div className="rec-cards-rec">추천</div>
                                    <h3>천애명월도</h3>
                                </div>
                                <h6>오랫동안 사랑받는</h6>
                            </div>
                        </div>
                        <div className="rec-cards">
                            <div className="img-wrap">
                                <img src="sources/deon.jpg"/>
                            </div>
                            <div className="rec-cards-detail">
                                <div>
                                    <div className="rec-cards-rec">추천</div>
                                    <h3>던전앤파이터</h3>
                                </div>
                                <h6>많은 게이머가 즐기는</h6>
                            </div>
                        </div>
                        <div className="rec-login-card">
                            <div className="rec-login-container">
                                <button className="b1">NEXON ID 로그인</button>
                                <div className="rec-login-special">
                                    <button style={{width:'173px', height:'50px'}}>일회용 로그인</button>
                                    <button style={{width:'173px', height:'50px'}}>QR 로그인</button>
                                </div>
                            </div>
                            <div className="rec-login-lists">
                                다른 계정 간편 로그인
                                <ul>
                                    <li className="fab fa-google"></li>
                                    <li className="fab fa-facebook-square"></li>
                                    <li class="fab fa-apple"></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>넥슨id찾기</li>
                                    <li>비밀번호찾기</li>
                                    <li>회원가입</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-all">
                    <div className="all-title">
                        <div>
                            <div>전체게임</div>
                            <div>
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="게임명 검색"/>
                        </div>
                    </div>
                    <div className="all-tag">
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                        <div>#asd</div>
                    </div>
                    <div className="all-pc">
                        <div className="all-pc-title">
                            <i>PC게임</i>
                            <i>모바일게임</i>
                        </div>
                        <div className="all-pc-cards">
                            <div className="card-list">
                                <div className="pc-card">

                                </div>
                                <div className="pc-card">

                                </div>
                                <div className="pc-card">

                                </div>
                                <div className="pc-card">

                                </div>
                            </div>
                            <div className="card-list">
                                <div className="pc-card">

                                </div>
                                <div className="pc-card">

                                </div>
                                <div className="pc-card">

                                </div>
                                <div className="pc-card">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-mobile">
                        <div className="all-mobile-title">
                            모바일게임
                        </div>
                        <div className="all-mobile-cards">
                            <div className="m-card-list">
                                <div className="m-card">

                                </div>
                                <div className="m-card">

                                </div>
                                <div className="m-card">

                                </div>
                                <div className="m-card">

                                </div>
                            </div>
                            <div className="m-card-list">
                                <div className="m-card">

                                </div>
                                <div className="m-card">

                                </div>
                                <div className="m-card">

                                </div>
                                <div className="m-card">

                                </div>
                            </div>
                        </div>
                        <div className="morebtn">
                            <button>더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}