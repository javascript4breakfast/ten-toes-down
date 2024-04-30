import React from 'react';
import styled from 'styled-components';
import {
    ActionButton,
    Button,
    Content,
    Dialog,
    DialogTrigger,
    Divider, 
    Heading,
    Switch,
    Meter,
    Text,
    Tooltip,
    TooltipTrigger,
    ToggleButton,
} from '@adobe/react-spectrum';
import FileGlobe from '@spectrum-icons/workflow/FileGlobe';
import VolumeMute from '@spectrum-icons/workflow/VolumeMute';
import ViewList from '@spectrum-icons/workflow/ViewList';
import Replay from '@spectrum-icons/workflow/Replay';
import { TbBrandReact, TbBrandVite, TbBrandNpm, TbBrandAdobe } from "react-icons/tb";
import { PlaybackContext } from '../../context/PlaybackContext';
import PlaybackProvider from '../../context/PlaybackContextProvider';
import usePlayerEvents from '../../hooks/usePlayerEvents';
import TopNav from '../../components/TopNav';
import PlayerControls from './PlayerControls';
import PlayerComponent from './PlayerComponent';
import PlaylistComponent from './PlaylistComponent';

const StyledNavWrapper = styled.div`
    padding: 16px 16px 0 16px;
    display: grid;
`;

const MenuControlsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

const PlayerPlaylistWrapper = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: auto 250px;
    grid-column-gap: 16px;

    ${(props) => props.hasplaylist === 'false' && `
        grid-template-columns: auto;
    `}

    @media(max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-columns: auto;

    }
`;

const PlayerGrid = styled.div`
    padding: 16px;    
    ${(props) => props.hasplaylist === 'false' && `
        padding: 0;
    `}
`;

const MoreAboutThisWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    height: 7em;
    justify-items: center;
    align-items: center;
    margin-top: 3em;

    .small-text {
        font-size: 0.8em;
    }

    .items-wrapper {
        color: red;
    }
`;

const PlaybackControlsContainer = styled.div`
    padding: 16px;
    margin-top: 16px;
`;

const MoreControlsWrapper = styled.div`
    display: grid;
    margin-top: 8px;
    grid-template-columns: 300px auto;

    @media(max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
        .loaded-meter {
            margin-top: 0.5em;
        }
    }

    .control-btns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
        align-items: center;
    }

    .loaded-meter {
        display: flex;
        justify-content: flex-end;
    }
`;

const BrandFooterWrapper = styled.div`
    padding: 16px;
    margin-top: 16px;
`;

const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    .grid-item {
        display: flex;
        justify-content: center;
    }
`;

const TitleWrapper = styled.div`
    font-weight: bold;
    padding: 0.8em 0;
    text-align: center;
`;

const NoticeWrapper = styled.div`
    font-weight: bold;
    padding: 0.333em;
    font-size: 0.8em;
`;

function PlaybackControls(props) {
    const [state] = React.useContext(PlaybackContext);
    const { toggleShowInfo, toggleShowPlaylist, toogleLoop } = usePlayerEvents();

    const {url, loaded, playbackRate, loop, muted, showPlaylist} = state;
    const calculatedLoadValue = state.loaded * 100;

    return (
        <PlaybackControlsContainer>
            <div>
                
                <Switch
                    isEmphasized
                    isSelected={state.showInfo}
                    isDisabled={!state.nowPlaying}
                    onChange={() => toggleShowInfo()}
                >
                   {state.showInfo ? 'Hide' : 'Show'} Playback Controls
                </Switch>
            </div>
            <MoreControlsWrapper>
                {state.showInfo && (
                    <>
                        
                        <div className='control-btns'>
                            <TooltipTrigger>
                                <ActionButton aria-label="media url">
                                    <FileGlobe />
                                </ActionButton>
                                <Tooltip>{url}</Tooltip>
                            </TooltipTrigger>
                            <ActionButton>
                                <VolumeMute />
                            </ActionButton>

                            <ToggleButton isSelected={state.showPlaylist} onPress={toggleShowPlaylist} aria-label="playlist toggle">
                                <ViewList />
                            </ToggleButton>

                            <ToggleButton isSelected={state.loop} onPress={toogleLoop}>
                                <Replay />
                            </ToggleButton>
                        </div>
                        <div className='loaded-meter'>
                            <Meter
                                label="Loaded"
                                variant="positive"
                                value={state.loaded * 100}
                            />
                        </div>
                    </>
                )}
            </MoreControlsWrapper>
        </PlaybackControlsContainer>     
    );
}

function ControlsComponent(props) {
    const [state] = React.useContext(PlaybackContext);
    const { setShowInfo, onPause, onPlay } = usePlayerEvents();
    const handlePlayOrPause = () => {
        if (!state.url) return;
        if (state.playing) {
            onPause();
        } else {
            onPlay();
        }
    };

    return (
        <PlayerControls
            playerRef={props.playerRef}
            showInfo={state.showInfo}
            setShowInfo={setShowInfo}
            handlePlayOrPause={handlePlayOrPause}
        />
    );
}

function PlayerAndPlaylistGrid(props) {
    const [state] = React.useContext(PlaybackContext);

    return (
        <PlayerGrid hasplaylist={state.showPlaylist.toString()}>
            <PlayerPlaylistWrapper hasplaylist={state.showPlaylist.toString()}>
                <PlayerComponent showPlaylist={state.showPlaylist} playerRef={props.playerRef} />
                <PlaylistComponent />
            </PlayerPlaylistWrapper>
        </PlayerGrid>
    );
}

function TopNavigation(props) {
    return (
        <StyledNavWrapper>
            <TopNav />         
        </StyledNavWrapper>
    );
}

function BrandFooter(props) {
    const currentYear = new Date().getFullYear().toString();

    return (
        <BrandFooterWrapper>
            <div className='made-in'>
                    Made with ❤️ in San Francisco
            </div>
            <div>
                © {currentYear} javascript4breakfast, Inc. All Rights Reserved.
            </div>
        </BrandFooterWrapper>
    );
}

function MoreAboutThis() {
    return (
        <>
            <MoreAboutThisWrapper>
                <div>
                    <span className='small-text'>
                        this video player supports .mp4 .webm .ogv .mp3 HLS(m3u8) and DASH(mpd) file types
                    </span>
                </div>
                <div>
                    <DialogTrigger type="tray">
                        <Button>
                            More About This Project
                        </Button>
                        <Dialog>
                        <Heading>React Media Player</Heading>
                        <Divider />
                        <Content>
                            <Text>
                                This endeavor exemplifies the culmination of my learnings from a year spent immersed in web streaming. It entails a React component designed to facilitate playback of diverse content sources such as file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion, and Kaltura.
                            </Text>
                            <NoticeWrapper>
                                <Text>
                                    *Kindly be aware that certain functionalities may not be operational or have yet to be integrated into this application, as it remains a work in progress.
                                </Text>
                            </NoticeWrapper>
                            <TitleWrapper>
                                <Text>Core Techologies</Text>
                            </TitleWrapper>
                            <ItemsGrid>
                                <TooltipTrigger>
                                    <ActionButton aria-label="react">
                                        <TbBrandReact />
                                    </ActionButton>
                                    <Tooltip>React.js</Tooltip>
                                </TooltipTrigger>
                                <TooltipTrigger>
                                    <ActionButton aria-label="vite">
                                        <TbBrandVite />
                                    </ActionButton>
                                    <Tooltip>Vite</Tooltip>
                                </TooltipTrigger>
                                
                                <TooltipTrigger>
                                    <ActionButton aria-label="adobe">
                                        <TbBrandAdobe />
                                    </ActionButton>
                                    <Tooltip>Adobe Spectrum</Tooltip>
                                </TooltipTrigger>

                                <TooltipTrigger>
                                    <ActionButton aria-label="react-player">
                                        <TbBrandNpm />
                                    </ActionButton>
                                    <Tooltip>React Player</Tooltip>
                                </TooltipTrigger>
                            </ItemsGrid>
                        </Content>
                        </Dialog>
                    </DialogTrigger>
                </div>
            </MoreAboutThisWrapper>
            <BrandFooter />
        </>
    );
}

function MenuControls({ playerRef }) {
    return (
        <MenuControlsContainer>
            <ControlsComponent playerRef={playerRef} />
            <PlaybackControls />
        </MenuControlsContainer>
    );
}

export default function PlaybackPage() {
    const playerRef = React.useRef(null);
    return (
        <PlaybackProvider>
            <TopNavigation />
            <PlayerAndPlaylistGrid playerRef={playerRef} />
            <MenuControls playerRef={playerRef} />
            <MoreAboutThis />
        </PlaybackProvider>
    );
}