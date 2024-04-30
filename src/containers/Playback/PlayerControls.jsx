import React from 'react';
import {
    FaPlay,
    FaPause,
    FaStop,
    FaBackwardFast,
    FaExpand,
    FaVolumeHigh,
} from 'react-icons/fa6';

import {
    Slider,
    ActionButton,
    StatusLight,
} from '@adobe/react-spectrum'
import styled from 'styled-components';
import Duration from './Duration';

import usePlayerEvents from '../../hooks/usePlayerEvents';
import { PlaybackContext } from '../../context/PlaybackContext';
import { useSpringValue, animated } from '@react-spring/web'
import screenfull from 'screenfull';

const ButtonControlsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    .btn-wrapper-left {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .btn-wrapper-right {
        align-self: center;
        justify-self: end;
    }

    .btn-inner-grid {
        display: grid;
        grid-column: 1 / 5;
        grid-template-columns: repeat(2, 1fr);      
        grid-auto-rows: minmax(3em, 8px);
        align-items: center;  
    }
    .btn-items {
        grid-column: 1 / 2;
        display: grid;
        justify-content: start;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
        margin-right: 1em;
    }
    .volume-bar {
        margin-bottom: -4px;
    }
`;

const ButtonVolumeWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

const PlayerControlsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 16px;

    .details-wrapper {
        margin-top: 8px;
        margin-left: -16px;
    }
    .vod-details-wrapper {
    }
`;

function VolumeBar({ showVolumeBar, setShowVolumeBar }) {
    const [state] = React.useContext(PlaybackContext);
    const { handleVolumeChange } = usePlayerEvents();
    const [timeLeft, setTimeLeft] = React.useState(4);
    const { nowPlaying, volume } = state;
    const ref = React.useRef(null);
    const opacity = useSpringValue(1, {
        config: {
            mass: 2,
            friction: 5,
            tension: 80,
        },
        delay: 500,
    });

    const isNowPlaying = !!(nowPlaying);

    React.useEffect(() => {
        if (timeLeft <= 1 && !ref.current) {
            opacity.start(0);
            ref.current = true;
         }

        if (timeLeft === 0) {
            setTimeLeft(null);
            setShowVolumeBar(false);
         }

         if (!timeLeft) return;
     
         const intervalId = setInterval(() => { 
           setTimeLeft(timeLeft - 1);
         }, 1000);
     
         return () => clearInterval(intervalId);

    }, [timeLeft]);

    if (!showVolumeBar) return null;

    return (
        <animated.div style={{ opacity }}>
            <div className='volume-bar'>
                <Slider
                    isDisabled={!isNowPlaying}
                    step={0.1}
                    onChange={handleVolumeChange}
                    minValue={0}
                    maxValue={1}
                    value={volume}
                    defaultValue={volume}
                    maxWidth='3rem'
                    isFilled
                />
            </div>
        </animated.div>
    );
}

export default function PlayerControls(props) {
    const [state] = React.useContext(PlaybackContext);
    const [showVolumeBar, setShowVolumeBar] = React.useState(false);

    const handleClickFullscreen = () => {
        screenfull.request(document.querySelector('.react-player'));
    };
    
    const {
        onStop,
        onHandleSeekChange,
        onHandleSeekMouseUp,
        setSelectedVideo,
        handleVolumeChange,
    } = usePlayerEvents();
    const {
        playing,
        volume,
        played,
        loaded,
    } = state;

    const handleSeekMouseUp = e => {
        onHandleSeekMouseUp();
        props.playerRef.current.seekTo(e);
    };

    const handleStop = () => {
        setSelectedVideo(null);
        onStop();
    };

    const isNowPlaying = !!(state.nowPlaying);
    
    const onPressVolume = () => {
        setShowVolumeBar(!showVolumeBar);
    };

    const isLiveStream = state.playedSeconds > state.duration;

    return (
        <PlayerControlsWrapper>
            {state.nowPlaying && !isLiveStream && (
                 <div className='vod-details-wrapper'>
                    <div>
                        {state.nowPlaying?.artist} {`: `}{state.nowPlaying?.description} 
                    </div>
                    <div>
                        <Duration seconds={state.playedSeconds} /> / <Duration seconds={state.duration} />
                    </div>
                </div>
            )}
            {isLiveStream && (
                <div className='details-wrapper'>
                    <StatusLight variant="negative">Live</StatusLight>
                </div>
            )}
            
            <Slider
                isFilled
                isDisabled={!isNowPlaying}
                width={'100%'}
                step={0.001}
                minValue={0}
                maxValue={0.99}
                value={state.played}
                onChange={onHandleSeekChange}
                onChangeEnd={handleSeekMouseUp}
            />
            
            <ButtonVolumeWrapper>
                <ButtonControlsContainer>
                    <div className='btn-wrapper-left'>
                        <div className='btn-inner-grid'>
                            <div className='btn-items'>
                                <ActionButton isDisabled={!isNowPlaying}>
                                    <FaBackwardFast />
                                </ActionButton>
                                <ActionButton onPress={onStop} isDisabled={!isNowPlaying}>
                                    <FaStop />
                                </ActionButton>
                                <ActionButton onPress={props.handlePlayOrPause} isDisabled={!isNowPlaying}>
                                    {playing ? (<FaPause />) : (<FaPlay />)}
                                </ActionButton>
                                <ActionButton onPress={onPressVolume}>
                                    <FaVolumeHigh />
                                </ActionButton>
                            </div>
                            {showVolumeBar && (
                                <VolumeBar showVolumeBar={showVolumeBar} setShowVolumeBar={setShowVolumeBar} />
                            )}
                        </div>
                    </div>

                    <div className='btn-wrapper-right'>
                        <ActionButton onPress={handleClickFullscreen} isDisabled={!isNowPlaying}>
                            <FaExpand />
                        </ActionButton>
                    </div>        
                </ButtonControlsContainer>
            </ButtonVolumeWrapper>
        </PlayerControlsWrapper>
    );
}