import React from 'react';
import { PlaybackContext } from '../context/PlaybackContext';

export default function usePlayerEvents() {
    const [state, setState] = React.useContext(PlaybackContext);
    
    const onLoadUrl = url => {
        setState(prevState => ({
            ...prevState,
            url,
            played: 0,
            loaded: 0,
            pip: false,
            playing: true,
        }));
    };

    const onToggleControls = () => {
        setState(prevState => ({
            ...prevState,
             controls: !state.controls,
        }));
    }

    const setShowInfo = (setShowInfo) => {
        setState(prevState => ({
            ...prevState,
            showInfo,
        }));
    };

    const toggleShowInfo = () => {
        setState(prevState => ({
            ...prevState,
            showInfo: !state.showInfo,
        }));
    };

    const toggleShowPlaylist = () => {
        setState(prevState => ({
            ...prevState,
            showPlaylist: !state.showPlaylist,
        }));
    }

    const onPlay = () => {
        if (!state.url) return;
        setState(prevState => ({
            ...prevState,
            playing: true,
        }));
    };

    const onPause = () => {
        if (!state.url) return;
        setState(prevState => ({
            ...prevState,
            playing: false,
        }));
    };

    const setNowPlaying = (value) => {
        setState(prevState => ({
            ...prevState,
            nowPlaying: value,
        }));
    }

    const onStop = () => {
        setState(prevState => ({
            ...prevState,
            url: null,
            pip: false,
            playing: false,
            played: 0,
            playedSeconds: 0,
            loaded: 0,
            loadedSeconds: 0,
            duration: 0,
            playbackRate: 1.0,
            seeking: false,
            nowPlaying: null,
        }));
    };

    const onProgress = _state => {
        setState(prevState => ({
            ...prevState,
            ..._state,
        }));
    };

    const onDuration = duration => {
        setState(prevState => ({
            ...prevState,
            duration,
        }));
    };

    const onHandleSeekMouseDown = () => {
        setState(prevState => ({
            ...prevState,
            seeking: true,
        }));
    };

    const onHandleSeekChange = e => {
        setState(prevState => ({
            ...prevState,
            played: parseFloat(e),
        }));
    };

    const handleVolumeChange = e => {
        setState(prevState => ({
            ...prevState,
            volume: parseFloat(e),
        }));
    };

    const onHandleSeekMouseUp = () => {
        setState(prevState => ({
            ...prevState,
            seeking: false,
        }));
    };

    const setSelectedVideo = selectedVideo => {
        setState(prevState => ({
            ...prevState,
            selectedVideo,
        }));
    };

    const toogleLoop = () => {
        setState(prevState => ({
            ...prevState,
            loop: !state.loop,
        }));
    };

    return {
        onPlay,
        onStop,
        onPause,
        onLoadUrl,
        onProgress,
        onDuration,
        onHandleSeekChange,
        onHandleSeekMouseUp,
        onToggleControls,
        handleVolumeChange,
        onHandleSeekMouseDown,
        setNowPlaying,
        setSelectedVideo,
        setShowInfo,
        toggleShowInfo,
        toggleShowPlaylist,
        toogleLoop,
    };
}