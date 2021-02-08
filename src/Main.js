import react from 'react'
import './css/Main.css'

export default function Main(){
    return(
        <div className="main-container">
            <div className="main-screen">
            
            </div>
            <div className="sub-screen">
                <div className="recommend">
                    <div className="rec-title">
                        <div className="rec-title-bit">
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

                        </div>
                        <div className="rec-cards">
                            
                        </div>
                        <div className="rec-cards">
                            
                        </div>
                        <div className="rec-cards">
                            
                        </div>
                        <div className="rec-cards">
                            
                        </div>
                        <div className="rec-login-card">
                            
                        </div>
                    </div>
                </div>
                <div className="game-all">
                    <div className="all-title">

                    </div>
                    <div className="all-tag">

                    </div>
                    <div className="all-pc">
                        <div className="all-pc-title">

                        </div>
                        <div className="all-pc-cards">

                        </div>
                    </div>
                    <div className="all-mobile">
                        <div className="all-mobile-title">

                        </div>
                        <div className="all-mobile-cards">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}