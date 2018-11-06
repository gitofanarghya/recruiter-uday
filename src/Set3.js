import React from 'react';
import Typing from 'react-typing-animation';
import Sound from 'react-sound';
import soundfile from './transcript(1).mp3';
import Delayed from './Delayed';
import {Button} from '@material-ui/core'

class Set3 extends React.Component{
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
                        <Typing><p>Will you Compromise?</p></Typing>
                    <Delayed waitBeforeShow={2000}>
                        <p> <Button variant='contained' onClick={() => this.props.setSet(4)}>  Never</Button></p>
                        <p> <Button variant='contained' onClick={() => this.props.setSet(0)}>  I might</Button></p>
                    </Delayed>
            </div>
        );
    }
}

export default Set3;

