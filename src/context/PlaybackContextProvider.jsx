import React from 'react';
import { PlaybackContext } from './PlaybackContext';

const initialState = {
    url: null,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
    nowPlaying: null,
    selectedVideo: null,
    showInfo: false,
    showPlaylist: true,
};

export default function PlaybackProvider(props) {
    const [state, setState] = React.useState({ ...initialState });
    return (
        <PlaybackContext.Provider value={[state, setState]}>
            {props.children}
        </PlaybackContext.Provider>
    );
}