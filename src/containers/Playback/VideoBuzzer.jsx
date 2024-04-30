import React from 'react';
import {Button, Divider} from '@adobe/react-spectrum';
import styled from 'styled-components';
import buffy from '../../clientlibs/img/buffy.png';
import { PlaybackContext } from '../../context/PlaybackContext';
import usePlayerEvents from '../../hooks/usePlayerEvents';
import { videoAssets } from '../../apiData/videoAssets';

const BuzzerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;

    .box:first-child {
        margin-bottom: 1em;
    }
    .box:last-child {
        margin-top: 1em;
    }

    img {
        max-width: 5em;
    }

    .btns-wrapper {
        display: flex;
        justify-content: space-between;
        min-width: 20em;

    }
`;

export default function VideoBuzzer({ config }) {
    const [state] = React.useContext(PlaybackContext);
    const { toggleShowPlaylist, setSelectedVideo } = usePlayerEvents();

    const getRandomVideo = (arr) => {
        const result = Math.floor(Math.random() * arr.length);
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const handleSelectRandom = () => {
        const randy = getRandomVideo(videoAssets);
        setSelectedVideo(randy);
    };

    if (config.selectedVideo || config.url) return null;

    return (
        <BuzzerContainer>
            <div className='box'>
                <img src={buffy} />
            </div>

            <div className='box'>
                <div>
                    Pick Video from Playlist
                </div>
            </div>
            
            <div className='box box-group'>
                {!state.showPlaylist && (
                    <div className='btns-wrapper'>
                        <div>
                            <Button variant='accent' onPress={toggleShowPlaylist}>
                                Show Playlist
                            </Button>
                        </div>
                        <div>
                            <Button variant='secondary' onPress={handleSelectRandom}>
                                Select Random Video
                            </Button>    
                        </div>    
                    </div>
                )}
                {state.showPlaylist && (
                     <div className='btn-single-item'>
                        <Button variant='secondary' onPress={handleSelectRandom}>
                            Select Random Video
                        </Button>
                    </div>
                )}
            </div>
        </BuzzerContainer>
    );
}