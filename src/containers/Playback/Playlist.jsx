import React from 'react';
import { ActionBar, ActionButton, ActionBarContainer, Well, Item, ListView } from '@adobe/react-spectrum'
import styled from 'styled-components';
import usePlayerEvents from '../../hooks/usePlayerEvents';
import { FaPlay } from "react-icons/fa6";
import { CgScreenWide } from "react-icons/cg";

import { videoAssets } from '../../apiData/videoAssets';
import { PlaybackContext } from '../../context/PlaybackContext';

const PlaylistHeadingWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 16px;
`;

export default function Playlist(props) {
    const [state] = React.useContext(PlaybackContext);
    const {
        onLoadUrl,
        setNowPlaying,
        setSelectedVideo,
        toggleShowPlaylist,
    } = usePlayerEvents();

    const onAssetSelect = assetId => {
        const selectedVideo = videoAssets.find((item) =>
            item.id === assetId.anchorKey
        );
        setSelectedVideo(selectedVideo);
    };

    const handleClear = () => {
        setSelectedVideo(null);
    };

    const handleActionPlay = (itemId) => {
        const selectedVideo = videoAssets.find(({ id }) => id === itemId);
        setNowPlaying(selectedVideo);
        onLoadUrl(selectedVideo.mediaUrl);
        handleClear();
    };

    if (!state.showPlaylist) return;

    return (
        <>
            <PlaylistHeadingWrapper>
                <ActionButton isQuiet onPress={toggleShowPlaylist}>
                    <CgScreenWide />
                </ActionButton>
            </PlaylistHeadingWrapper>
            <div>    
                <ActionBarContainer maxWidth="93vw" height="50vh">
                    <ListView
                        density='compact'
                        selectionStyle='highlight'
                        items={videoAssets}
                        aria-label="ListView with action bar"
                        selectionMode="single"
                        onSelectionChange={onAssetSelect}
                    >
                        {(item) => <Item>{item.description}</Item>}
                    </ListView>

                    <ActionBar
                        selectedItemCount={props.selectedVideo ? 1 : 0}
                        onAction={(key) => handleActionPlay(key)}
                        onClearSelection={props.handleClear}
                    >
                        <Item key={props?.selectedVideo?.id}>
                            <FaPlay />
                        </Item>

                    </ActionBar>
                </ActionBarContainer>
            </div>
        </>
       
    );
}