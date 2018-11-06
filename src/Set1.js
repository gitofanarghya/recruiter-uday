import React from 'react';
import Typing from 'react-typing-animation';
import Sound from 'react-sound';
import soundfile from './1e1513ec-c137-4156-a19c-aeca72ea285f.wav';
import Delayed from './Delayed';
import {Button} from '@material-ui/core'

class Set1 extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Sound
                        url={soundfile}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={2}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                </div>
                <Typing>
                    <p>You have one life, How are you going to live it?</p>
		</Typing>
	     <Delayed waitBeforeShow={4000}>
		 <div>
		     <p><Button variant='contained' onClick={() => this.props.setSet(2)}> By becoming fucking rich</Button></p>
                    <Delayed waitBeforeShow={1000}><p><Button variant='contained' onClick={() => this.props.setSet(2)}> By becoming the best of the best</Button></p></Delayed>
                    <Delayed waitBeforeShow={2000}><p><Button variant='contained' onClick={() => this.props.setSet(2)}> Like a fucking BOSS</Button></p></Delayed>
                    <Delayed waitBeforeShow={3000}><p><Button variant='contained' onClick={() => this.props.setSet(2)}> By changing the world</Button></p></Delayed>
		    <Delayed waitBeforeShow={4000}><p><Button variant='contained' onClick={() => this.props.setSet(0)}> Like an average person</Button></p></Delayed>
		</div>
	     </Delayed>
            </div>
        );
    }
}

export default Set1;
