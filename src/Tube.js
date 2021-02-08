import React,{Component} from 'react';
import YouTube from 'react-youtube';

class Tube extends Component{
    render() {
      const opts = {
        width:510,
        height:300,
        playerVars: {
        autoplay: 0,
        },
      };
      return (
        <section>
          <div className="modal">
            <YouTube 
              videoId='1e4-wfbD7jo' 
              opts={opts} 
              />
          </div>
        </section>
      )}
}

export default Tube;