import React from 'react';
import Typing from 'react-typing-animation';
import Sound from 'react-sound';
import soundfile from './transcript.mp3';
import Delayed from './Delayed';
import {Button} from '@material-ui/core'

class Set2 extends React.Component{
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
			<Typing><p>Are you willing to do anything for it?</p></Typing>
                    <Delayed waitBeforeShow={3000}>
                        
                        <p> <Button variant='contained' onClick={() => this.props.setSet(3)}> Yes </Button></p>
                        <p> <Button variant='contained' onClick={() => this.props.setSet(0)}> No </Button></p>
                    </Delayed>
            </div>
        );
    }
}

export default Set2;

