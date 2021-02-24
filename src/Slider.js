import React from "react";
import './css/Slider.css'

export default function simpleSlider(){
    var settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5,
        cssEase:"linear",
        draggable:false,
  };
    return(
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide-card">
                    <button className="slide-btn"></button>
                    <span></span>
                    <div className="slide-btn-title">크레이지 아케이드</div>
                    <div className="slide-btn-detail">나비 커플링 만들기</div>
                </div>
                <div className="slide-card">
                    <button className="slide-btn"></button>
                    <span></span>
                    <div className="slide-btn-title">크레이지 아케이드</div>
                    <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaaa</div>
                </div>
                <div className="slide-card">
                    <button className="slide-btn"></button>
                    <span></span>
                    <div className="slide-btn-title">크레이지 아케이드</div>
                    <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaa</div>
                </div>
                <div className="slide-card">
                    <button className="slide-btn"></button>
                    <span></span>
                    <div className="slide-btn-title">크레이지 아케이드</div>
                    <div className="slide-btn-detail">나비 커플링 만들기aaaaaaaaaaaa</div>
                </div>
                <div className="slide-card">
                    <button className="slide-btn"></button>
                    <span></span>
                    <div className="slide-btn-title">크레이지 아케이드</div>
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
    )
}