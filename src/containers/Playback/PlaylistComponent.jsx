import React from 'react'
import styled from 'styled-components';

import Playlist from './Playlist';
import { PlaybackContext } from '../../context/PlaybackContext';
import usePlayerEvents from '../../hooks/usePlayerEvents';

const PlaylistContainer = styled.div``;

export default function PlaylistComponent(props) {
    const [state] = React.useContext(PlaybackContext);
    const {
        onLoadUrl,
        setNowPlaying,
        setSelectedVideo,
    } = usePlayerEvents();

    const handleClear = () => {
        setSelectedVideo(null);
    };

    const onTriggerPlay = () => {
        setNowPlaying(selectedVideo);
        onLoadUrl(selectedVideo.mediaUrl);
        handleClear();
    };
    
    return (
        <PlaylistContainer>
            <Playlist
                handleClear={handleClear}
                selectedVideo={state.selectedVideo}
                onTriggerPlay={onTriggerPlay}
                setSelectedVideo={setSelectedVideo}
            />
        </PlaylistContainer>
    );
}