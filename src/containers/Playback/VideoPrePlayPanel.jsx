import PrePlayPanel from "./PrePlayPanel";
import VideoBuzzer from "./VideoBuzzer";
import styled from 'styled-components';

const PrePlayContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
`;

export default function VideoPrePlayPanel(props) {
    const {
        url,
        handleClear,
        selectedVideo,
        onTriggerPlay,
    } = props

    return (
        <PrePlayContainer>
            {selectedVideo && !url && (
                <PrePlayPanel
                    handleClear={handleClear}
                    selectedVideo={selectedVideo}
                    onTriggerPlay={onTriggerPlay}
                />
            )}
            <VideoBuzzer config={{selectedVideo, url}} />
        </PrePlayContainer>
        
    );
}