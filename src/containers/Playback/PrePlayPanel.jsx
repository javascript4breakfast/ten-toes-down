import React from 'react';
import styled from 'styled-components';
import { Button } from '@adobe/react-spectrum';

import { FaPlay } from 'react-icons/fa';
import { RiTwitchLine, RiTvLine, RiSoundcloudLine } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import usePlayerEvents from '../../hooks/usePlayerEvents';
import { PlaybackContext } from '../../context/PlaybackContext';

const iconMap = {
    'twitch': <RiTwitchLine />,
    'youtube': <PiYoutubeLogo />,
    'other': <RiTvLine />,
    'soundcloud': <RiSoundcloudLine />,
};

const trunkFit = (s, m) => s.length > m ? `${s.slice(0, m)}...` : s;

const PrePlayGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding-top: 32px;
    padding-bottom: 16px;

    .details-grid {
        display: grid;
        grid-template-columns: 30% auto;
        margin: 0px 10%;
    }

    .icon-wrap {
        font-size: 5em;
        display: flex;
        justify-content: center;
    }

    .src-title-wrap {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }

    .src-wrap {
        grid-column: 1/3;
        justify-self: stretch;
        align-self: center;
    }

    .title-wrap {
        grid-column: 3/7;
        justify-self: stretch;
        align-self: center;s
    }

    .link-wrap {
        grid-row: 2;
        grid-column: 1 / 7;
        justify-self: stretch;
        align-self: center;
    }

    .btn-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
        margin: 16px 10%;
    }

    .btn-group.three-col {
        grid-template-columns: repeat(3, 1fr);
    }
    .src-title-wrap span {
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        align-self: center;
    }
`;

const SpanMarginLeft = styled.div`
    margin-left: 8px;
`;

export default function PrePlayPanel(props) {
    const {toggleShowPlaylist} = usePlayerEvents();
    const [state] = React.useContext(PlaybackContext);
    const hasIconKey = ['twitch', 'youtube', 'soundcloud'].includes(props.selectedVideo.source);
    const iconKey = hasIconKey ? props.selectedVideo.source : 'other';
    const hasThreeCols = !(state.showPlaylist);
    const btnGroupClassName = hasThreeCols ? 'btn-group three-col' : 'btn-group';

    const mediaUrlTruncd = trunkFit(props.selectedVideo.mediaUrl, 30);

    return (
        <PrePlayGrid>
            <div className='details-grid'>
                <div className='icon-wrap'>
                    <div>
                        {iconMap[iconKey]}
                    </div>
                </div>
                <div className='src-title-wrap'>
                    <div className='src-wrap'>
                        <div>
                            <span>source</span>
                        </div>
                        <div>{props.selectedVideo.source}</div> 
                    </div>
                    <div className='title-wrap'>
                        <div>
                            <span>title</span>
                        </div>
                        <div>
                            <p>{props.selectedVideo.description}</p>
                        </div>
                    </div>
                    <div className='link-wrap'>
                        <div>
                            <span>url</span>
                        </div>
                        <div>
                            {mediaUrlTruncd}
                        </div>
                    </div>
                </div> 
            </div>
            <div className={btnGroupClassName}>
                <Button variant='accent' onPress={props.onTriggerPlay}>
                    <FaPlay />
                    <SpanMarginLeft>Play</SpanMarginLeft>
                </Button>
                {!state.showPlaylist && (
                    <Button onPress={toggleShowPlaylist}>
                        Playlist
                    </Button>
                )}
                <Button variant='secondary' onPress={props.handleClear}>
                    Cancel
                </Button>
            </div>
        </PrePlayGrid>
    );
}