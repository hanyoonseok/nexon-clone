import react,{useEffect,useState,useRef} from 'react'
import './css/Main.css'
import Tube from './Tube'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './css/Slider.css'

export default function Main(){
    const sliderRef=useRef();
    const [current, setCurrent]=useState(1);
    var settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5,
        cssEase:"linear",
        draggable:false,
    };
    function aa(){
        setCurrent(1);
    }
    useEffect(()=>{
        setInterval(()=>{
            setCurrent(current => current+1);
        },6000);
        return ()=>clearInterval();
    },current)
    function nextt(){
        sliderRef.current.slickNext();
    }
    return(
        <div className="main-container">
            <div className="main-screen" style={{backgroundImage:`url('https://placeimg.com/40/40/${current}')`}}>
                <div className="main-screen-youtube">
                    <Tube/>
                </div>
                <div className="main-screen-btns">
                    <div className="slider-container">
                        <Slider {...settings} ref={sliderRef}>
                            <div className="slide-card" onClick={aa}>
                                <button className="slide-btn "></button>
                                <span className= {current==1?"on":""}></span>
                                <div className="slide-btn-title">크레이지 아케이드</div>
                                <div className="slide-btn-detail">나비 커플링 만들기</div>
                            </div>
                            <div className="slide-card">
                                <button className="slide-btn"></button>
                                <span className= {current==2?"on":""}></span>
                                <div className="slide-btn-title">2</div>
                                <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaaa</div>
                            </div>
                            <div className="slide-card">
                                <button className="slide-btn"></button>
                                <span className= {current==3?"on":""}></span>
                                <div className="slide-btn-title">3이드</div>
                                <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaa</div>
                            </div>
                            <div className="slide-card">
                                <button className="slide-btn"></button>
                                <span className= {current==4?"on":""}></span>
                                <div className="slide-btn-title">크4</div>
                                <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaa</div>
                            </div>
                            <div className="slide-card">
                                <button className="slide-btn"></button>
                                <span className= {current==5?"on":""}></span>
                                <div className="slide-btn-title">크5드</div>
                                <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaa</div>
                            </div>
                            <div className="slide-card" onClick={nextt}>
                                <button className="slide-btn"></button>
                                <span></span>
                                <div className="slide-btn-title">크6드</div>
                                <div className="slide-btn-detail">나비 커플링 만들기</div>
                            </div>
                            <div className="slide-card">
                                <button className="slide-btn"></button>
                                <span></span>
                                <div className="slide-btn-title">크7드</div>
                                <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaaa</div>
                            </div>
                            <div className="slide-card">
                                <button className="slide-btn"></button>
                                <span></span>
                                <div className="slide-btn-title">크드8</div>
                                <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaa</div>
                            </div>
                                {/* <button className="slide-btn">
                                    <span></span>
                                    <div className="slide-btn-title">크레이지 아케이드 <br/></div>
                                    <div className="slide-btn-detail">나비 커플링 만들기</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">카운터스트라이크 온라인<br/></div>
                                    <div className="slide-btn-detail">천상의 에픽 무기 '디바인 블래스터'</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">메이플스토리<br/></div>
                                    <div className="slide-btn-detail">신규지역 호텔 아르크스</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">카트라이더 러쉬플러스<br/></div>
                                    <div className="slide-btn-detail">카러플|포르쉐 타이칸 등장!</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">EA SPORTS FIFA ONLINE 4 <br/></div>
                                    <div className="slide-btn-detail">21 TOTY 출시</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">마비노기<br/></div>
                                    <div className="slide-btn-detail">전투 콘텐츠 UP데이트</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">넥슨<br/></div>
                                    <div className="slide-btn-detail">넥슨 보안 캠페인</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">사이퍼즈<br/></div>
                                    <div className="slide-btn-detail">신축년 설 이벤트</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">테일즈 위버<br/></div>
                                    <div className="slide-btn-detail">신축년 소.확.행 이벤트!</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">EA SPORTS FIFA ONLINE 4 <br/></div>
                                    <div className="slide-btn-detail">21 TOTY 출시</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">천애명월도<br/></div>
                                    <div className="slide-btn-detail">천애명월도 절대쌍교 이벤트</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">EA SPORTS FIFA ONLINE 4 <br/></div>
                                    <div className="slide-btn-detail">설날 플레이 버닝</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">카운터 사이드<br/></div>
                                    <div className="slide-btn-detail">카운터 사이드 1주년</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">EA SPORTS FIFA ONLINE 4 <br/></div>
                                    <div className="slide-btn-detail">21 TOTY 출시</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">EA SPORTS FIFA ONLINE 4 <br/></div>
                                    <div className="slide-btn-detail">21 TOTY 출시</div>
                                </button>
                                <button className="slide-btn">
                                    <div className="slide-btn-title">카트라이더<br/></div>
                                    <div className="slide-btn-detail">카트라이더 X 한국타이어</div>
                                </button>  */}
                        </Slider>
                    </div>
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
                                <img alt="" src="sources/kart.jpg"/>
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
                                <img alt="" src="sources/sudden.png"/>
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
                                <img alt="" src="sources/fifa.jpg"/>
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
                                <img alt="" src="sources/cheon.jpg"/>
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
                                <img alt="" src="sources/deon.jpg"/>
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
                                <div>회원가입</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="game-all">
                    <div className="all-title">
                        <div>
                            <div className="all-title-title">전체게임</div>
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
                        <div className="all-pc-cards">
                            <div className="all-card-list">
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title"><span>V4</span><span><i class="fas fa-coffee"></i></span></div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title"><span>V4</span><span><i class="fab fa-youtube"></i></span></div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">V4</div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">V4</div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                            </div>
                            <div className="all-card-list">
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">V4</div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">V4</div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">V4</div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
                                </div>
                                <div className="all-pc-card">
                                    <div className="card-img">
                                        <img alt="" src="sources/v4.jpg"/>
                                    </div>
                                    <div className="card-info">
                                        <div className="card-title">V4</div>
                                        <div className="card-detail">대장, PC에서 기다릴게요!</div>
                                    </div>
                                    <div className="card-tag">
                                        <i class="fas fa-desktop"> MMORPG</i>
                                    </div>
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
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="m-card-list">
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-card">
                                    <div>
                                        <img alt="" src="sources/kart.jpg"/>
                                    </div>
                                    <div className="m-card-detail">
                                        <div>
                                            <div className="card-title"><span>메이플스토리M</span><span><i class="fas fa-coffee"></i></span></div>
                                            <div className="card-detail">RPG</div>
                                        </div>
                                        <div className="m-card-logo">
                                            <i class="fab fa-apple"></i>
                                            <i class="fab fa-google-play"></i>
                                        </div>
                                    </div>
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