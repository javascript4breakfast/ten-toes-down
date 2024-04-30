import React from 'react';
import ReactPlayer from 'react-player';

import { PlaybackContext } from '../../context/PlaybackContext';

export default function PlayerScreen(props) {
    const [state] = React.useContext(PlaybackContext);
    const {
        url,
        pip,
        playing,
        controls,
        light,
        volume,
        muted,
        playbackRate,
        loop,
    } = state;

    if (!props.url) return null;

    return (
        <ReactPlayer
            className='react-player'
            width={'100%'}
            height={'100%'}
            ref={props.playerRef}
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onPlay={props.onPlay}
            onReady={props.handleOnReady}
            onStart={props.onStart}
            onEnded={props.onEnd}
            onProgress={props.onProgress}
            onDuration={props.onDuration}
            onEnablePIP={() => console.log('enable pip')}
            onDisablePIP={() => console.log('disable pip')}
        />
    );
}