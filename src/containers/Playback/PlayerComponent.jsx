import React from 'react';
import styled from 'styled-components';
import {Badge, Text} from '@adobe/react-spectrum';
import VideoOutline from '@spectrum-icons/workflow/VideoOutline';
import Globe from '@spectrum-icons/workflow/Globe';

import { AppContext } from '../../context/AppContext';
import { PlaybackContext } from '../../context/PlaybackContext';

import usePlayerEvents from '../../hooks/usePlayerEvents';

import PlayerScreen from './PlayerScreen';
import VideoPrePlayPanel from './VideoPrePlayPanel';

const VideoContainer = styled.div`
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    min-height: 50vh;
    .no-playlist {
        padding: 16px 0 0 16px;
    }
`;

function VideoBadge(props) {
    const hasSelectedVideo = props?.selectedVideo;
    const innerText =  hasSelectedVideo ? new URL(props.selectedVideo.mediaUrl).hostname : 'breakfastPlayer v0.01'
    const badgeClass = props.showPlaylist ? '' : 'no-playlist';
    return (
        <div className={badgeClass}>
             <Badge variant={props.theme === 'light' ? 'neutral' : 'info'}>
               
                {hasSelectedVideo ? ( <Globe aria-label="globe" />) : ( <VideoOutline aria-label="video" />)}
                <Text>{innerText}</Text>
            </Badge>
        </div>
       
    );
}

const PlaybackWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function PlayerComponent({ playerRef, showPlaylist }) {
    const [state] = React.useContext(PlaybackContext);
    const [themeState] = React.useContext(AppContext);

    const {
        onPlay,
        onLoadUrl,
        onDuration,
        onProgress,
        setNowPlaying,
        setSelectedVideo,
    } = usePlayerEvents();

    const {
        url,
        nowPlaying,
        selectedVideo,    
    } = state;

    const handleClear = () => {
        setSelectedVideo(null);
    };

    const onTriggerPlay = () => {
        setNowPlaying(selectedVideo);
        onLoadUrl(selectedVideo.mediaUrl);
        handleClear();
    };

    const handleOnReady = () => {
        console.log('on ready =>');
    };

    const handleOnStart = () => {
        console.log('on start =>');
    };

    const handleOnEnd = () => {
        console.log('on end =>');
    };
    
    return (
            <VideoContainer>
                {!nowPlaying && (
                    <VideoBadge
                        showPlaylist={showPlaylist}
                        selectedVideo={state.selectedVideo}
                        theme={themeState.colorScheme}
                    />
                )}
                <PlaybackWrapper>
                    <PlayerScreen
                        url={url}
                        nowPlaying={nowPlaying}
                        onStart={handleOnStart}
                        playerRef={playerRef}
                        onPlay={onPlay}
                        onEnd={handleOnEnd}
                        onReady={handleOnReady}
                        onProgress={onProgress}
                        onDuration={onDuration}
                    />
                    <VideoPrePlayPanel
                        url={url}
                        handleClear={handleClear}
                        selectedVideo={selectedVideo}
                        onTriggerPlay={onTriggerPlay}
                    />
                </PlaybackWrapper>
            </VideoContainer>
           
    );
}