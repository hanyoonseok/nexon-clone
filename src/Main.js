import react,{useState,useEffect,useRef} from 'react'
import './css/Main.css'
import Tube from './Tube'
import CardMode from './CardMode'
import ListMode from './ListMode'
import MCardMode from './MCardMode'
import MListMode from './MListMode'
import './css/Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay]);
export default function Main(){
    const [Mode, setMode] =useState(false);
    function cardmode(){
        setMode(true);
    }
    function listmode(){
        setMode(false);
    }
    return(
        <div className="main-container">
            <div className="main-screen">
                <div className="main-screen-youtube">
                    <Tube/>
                </div>
                <div className="main-screen-btns">
                    <Swiper
                    spaceBetween={2}
                    slidesPerView={5}
                    followFinger={false}
                    loop={true}
                    navigation
                    autoplay={{delay:2000, disableOnInteraction:false}}
                    >
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">크레이지 아케이드</div>
                            <div className="slide-btn-detail">나비 커플링 만들기</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">카운터스트라이크 온라인</div>
                            <div className="slide-btn-detail">천상의 에픽 무기 '디바인 블래스터'</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">메이플스토리</div>
                            <div className="slide-btn-detail">신규지역 호텔 아르크스</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">카트라이더 러쉬플러스</div>
                            <div className="slide-btn-detail">카러플|포르쉐 타이칸 등장!</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">EA SPORTS FIFA ONLINE 4</div>
                            <div className="slide-btn-detail">21 TOTY 출시</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">마비노기</div>
                            <div className="slide-btn-detail">전투 콘텐츠 UP데이트</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">넥슨</div>
                            <div className="slide-btn-detail">넥슨 보안 캠페인</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">사이퍼즈</div>
                            <div className="slide-btn-detail">신축년 설 이벤트</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">테일즈 위버</div>
                            <div className="slide-btn-detail">신축년 소.확.행 이벤트!</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">천애명월도</div>
                            <div className="slide-btn-detail">천애명월도 절대쌍교 이벤트</div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-card">
                            <span></span>
                            <div className="slide-btn-title">카운터 사이드</div>
                            <div className="slide-btn-detail">카운터 사이드 1주년</div>
                        </SwiperSlide>
                    </Swiper>
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
                                <div className="img-frame">
                                    <img alt="" src="sources/kart.jpg"/>
                                </div>
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
                                <div className="img-frame">
                                    <img alt="" src="sources/sudden.png"/>
                                </div>
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
                                <div className="img-frame">
                                    <img alt="" src="sources/fifa.jpg"/>
                                </div>
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
                                <div className="img-frame">
                                    <img alt="" src="sources/cheon.jpg"/>
                                </div>
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
                                <div className="img-frame">
                                    <img alt="" src="sources/deon.jpg"/>
                                </div>
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
                                    <button>일회용 로그인</button>
                                    <button >QR 로그인</button>
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
                            <div className="rec-service">
                                <div>
                                    <span>넥슨 ID찾기</span><span>비밀번호 찾기</span>
                                </div>
                                <span>회원가입</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-all">
                    <div className="all-title">
                        <div className="all-title-container">
                            <div className="all-title-title">전체게임</div>
                            <div>
                                <button onClick={cardmode} className={Mode?"":"off"}><i class="fas fa-th-large"></i></button>
                                <button onClick={listmode} className={Mode?"off":""}><i class="fas fa-bars"></i></button>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="게임명 검색"/>
                        </div>
                    </div>
                    <div className="all-tag">
                        <input type="radio" id="all"/><label for="all">#전체</label>
                        <input type="radio" id="all"/><label for="all">#전체</label>
                        <input type="radio" id="all"/><label for="all">#전체</label>
                        <input type="radio" id="all"/><label for="all">#전체</label>
                        <input type="radio" id="all"/><label for="all">#전체</label>
                        <input type="radio" id="all"/><label for="all">#전체</label>
                        <input type="radio" id="all"/><label for="all">#전체</label>
                    </div>
                    <div className="all-pc">
                        <div className="all-pc-title">
                            <span style={{color:'#4a4e57'}}>PC게임</span>
                            <span className="pc-mob">모바일게임</span>
                        </div>
                        {Mode?<CardMode/>:<ListMode/>}
                    </div>
                    <div className="all-mobile">
                        <div className="all-mobile-title">
                            모바일게임
                        </div>
                        {Mode?<MCardMode/>:<MListMode/>}
                        
                        <div className="morebtn">
                            <button>더보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}