import React from 'react';
import {
    Button,
    Content,
    Heading,
    InlineAlert,
} from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import { landingHeadlines } from '../../apiData/landingHeadlines';
import vinesPlain from '../../clientlibs/img/vines_plain.png';
import vineRose from '../../clientlibs/img/vine_rose.png';

import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';

const landingPageAttributes = {
    title: `Jonathan Ortiz`,
    subTitle: `Full Stack Software Engineer`,
    description: `Skilled in Software Development, Software-as-a-Service (SaaS), Single Page Applications (SPAs), and Cloud Technologies, I specialize in crafting fluid user experiences. I harness advanced frameworks to innovate and guarantee cross-platform functionality. Dedicated to remaining abreast of tech advancements, I deliver top-tier solutions tailored for both Enterprise and Start-up environments.`
};

const getRandomHeadline = arr => arr[Math.floor(Math.random() * arr.length)];

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin-top: 16px;
    
    @media (max-width: 525px) {
        grid-gap: 0.333em;
    }
`;

const DescriptionContainer = styled.div`
    max-width: 45rem;
    padding: 8px;
    min-width: 100vw;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    .child {
        position: relative;
        grid-column: 3 / 11;
    }

    @media (max-width: 625px) {

        .child {
            grid-column: 2 / 12;
        }
    }

    @media (max-width: 525px) {

        .child {
            grid-column: 1 / 13;
        }
        padding: 0.8em;
    }

`;

const VinesContainer = styled.div`
    position: absolute;
    right: 3px;
    top: 2px;
    img {
        transform: rotate(180deg) scaleX(-1);
        max-height: 3.8em;
    }
`;

const VinesTop = () => {
    const [state] = React.useContext(AppContext);
    if (state.colorScheme === 'dark') {
        return (
            <VinesContainer>
                <img src={vinesPlain} />
            </VinesContainer>
        );
    }
    return (
        <VinesContainer>
            <img src={vineRose} />
        </VinesContainer>
    );
}

function LandingPageButtons(props) {
    const [state] = React.useContext(AppContext);
    const navigate = useNavigate();
    const onNavigateTo = (route, options = {}) => {
        navigate(route, options);
    };

    return (
        <ButtonContainer>
            <Button isDisabled={!state.hasAgreed} onPress={() => onNavigateTo('/resume')} variant='accent'>
                Resume
            </Button>
            <Button isDisabled={!state.hasAgreed} onPress={() => onNavigateTo('/player')} variant='secondary'>
                Watch
            </Button>
            <Button isDisabled={!state.hasAgreed} onPress={() => onNavigateTo('/blog')} variant='primary'>
                Blog
            </Button>
        </ButtonContainer>
    );
}
const HeadingWrapper = styled.div`
    span {
        color: red;
        margin-left: 1em;
        font-size: 0.8em;
    }

`;

export default function LandingPageDescription() {
    const [state] = React.useContext(AppContext);
    const randomHeadline = getRandomHeadline(landingHeadlines);

    return (
        <DescriptionContainer>
            <div className='child'>
                <InlineAlert variant={state.hasAgreed ? 'neutral': 'notice'}>
                    <Heading level={1}>
                        <HeadingWrapper>
                            {landingPageAttributes.title}
                            {!state.hasAgreed && (
                                <span>{` `} Please Select Advertising Settings</span>
                            )}
                        </HeadingWrapper>
                        <div>
                            Software Engineer - Consultant - Career Mentor
                        </div>
                    </Heading>
                    <Content>
                        <div>
                            {randomHeadline}
                        </div>
                        <LandingPageButtons />
                    </Content>
                </InlineAlert>
                <VinesTop />
            </div>
        </DescriptionContainer>
    );
}