import React from 'react';
import {
    Button,
    ButtonGroup,
    ActionButton,
    Checkbox,
    DialogTrigger,
    Dialog,
    Divider,
    Content,
    Heading,
    InlineAlert,
    Text,
} from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'
import { TbDeviceDesktop, TbDeviceMobile, TbSunLow, TbMoonStars } from 'react-icons/tb';
import { landingHeadlines } from '../../apiData/landingHeadlines';
import vinesPlain from '../../clientlibs/img/vines_plain.png';
import vineRose from '../../clientlibs/img/vine_rose.png';

import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';
import { AppContext } from '../../context/AppContext';
import useCookie from '../../hooks/useCookie';

import Banner from '../../components/Banner';

const landingPageAttributes = {
    title: `Jonathan Ortiz`,
    subTitle: `Full Stack Software Engineer`,
    description: `Skilled in Software Development, Software-as-a-Service (SaaS), Single Page Applications (SPAs), and Cloud Technologies, I specialize in crafting fluid user experiences. I harness advanced frameworks to innovate and guarantee cross-platform functionality. Dedicated to remaining abreast of tech advancements, I deliver top-tier solutions tailored for both Enterprise and Start-up environments.`
};

const getRandomHeadline = (arr) => {
    const result = Math.floor(Math.random() * arr.length);
    return arr[Math.floor(Math.random() * arr.length)];
};

const cookiePageAttributes = {
    dialogTitle: `Cookies and Advertising Choices`,
    firstDisclaimer: `We work with trusted partners to provide relevant advertising based on information about your use of javascript4breakfast and third-party websites and applications.`,
    secondDisclaimer: `javascript4breakfast values your privacy. We do not sell your personal information. If you’d like to know more about how javascript4breakfast protects your privacy please visit our Privacy Notice.`,
    thirdDisclaimer: `When you see advertising on javascript4breakfast, we try to make it relevant by referring to information about you and your activities which you share with javascript4breakfast and our affiliated companies, such as our parent company, Amazon.com, Inc. This may include information like your location or the categories of content you watch. In some cases, javascript4breakfast may work with trusted third-party advertising partners to provide what is sometimes called “targeted advertising” or “cross-contextual advertising.” This form of advertising allows us to further personalize the advertising you see by incorporating information about your activities on third-party websites and applications across the internet. When we work with third-parties in this way, we may share some of your personal data, for example by using cookies or other technologies, but we do not use or share information which on its own identifies you, such as name or email address. You have the right to opt-out of targeted advertising by preventing sharing of your personal data with third-parties for advertising purposes. To do so, please use the checkbox below.`,
};

const LandingPageGrid = styled.div`
    display: grid;
    justify-items: center;
    align-content: center;
    height: 100vh;
    grid-gap: 16px;
    .landing-title {
        font-size: 1.8em;
    }
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    margin-top: 16px;
`;

const DescriptionContainer = styled.div`
    position: relative;
    max-width: 45rem;
    padding: 8px;
`;

const NavigationContainer = styled.nav`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    padding: 16px;
`;

const VinesContainer = styled.div`
    position: absolute;
    right: 3px;
    top: 8px;
    img {
        transform: rotate(180deg) scaleX(-1);
        max-height: 5rem;
    }
`;

const CookieAgreementWrapper = styled.div`
    display: grid;
    grid-template-columns: 24em auto;
    align-items: center;
    .btns-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5em;
    }

    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
        max-width: 27rem;
        text-align: center;
        .btns-wrapper {
            margin-top: 1em;
        }

    }
`;
const DisclaimerItemWrapper = styled.div`
    margin-bottom: 1em;
`;

const CookieWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    max-width: 28em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;

    .banner {
    }
    .proceed {
    }
    .opt-out {
    }

`;

const ContentWrapper = styled.div`
    grid-column: 1 / 7;
    grid-row: 3 / 3;
    display: grid;
    grid-gap: 16px;
    padding: 0 1.333em;
    .btns-wrapper {
        display: flex;
    }
    .save-btn {
        margin-right: 8px;
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

function NavigationWidget(props) {
    const [state] = React.useContext(AppContext);
    const { toggleTheme, toggleScale } = useTheme();

    return (
        <NavigationContainer>
                <ActionButton
                    aria-label="Icon only"
                    onPress={toggleTheme}
                >
                    {state.colorScheme === 'dark' ? (<TbMoonStars />) : (<TbSunLow />)}
                </ActionButton>

                <ActionButton
                    aria-label="Icon only"
                    onPress={toggleScale}
                >
                    {state.scale === 'large' ? (<TbDeviceDesktop />) : (<TbDeviceMobile />)}
                </ActionButton>
        </NavigationContainer>
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
        </ButtonContainer>
    );
}

function LandingPageDescription(props) {
    const [state] = React.useContext(AppContext);
    const randomHeadline = getRandomHeadline(landingHeadlines);

    return (
        <DescriptionContainer>
            <InlineAlert variant={state.hasAgreed ? 'neutral': 'notice'}>
                <Heading level={1}>
                    <div className='landing-title'>
                        {landingPageAttributes.title}
                    </div>
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
        </DescriptionContainer>
    );
}

function CookieDialog(props) {
    const [optOut, setOptOut] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const hasInteraction = React.useRef(null);
    const {setCookie} = useCookie();

    const onSave = (callback) => {
        setCookie();
        callback();
    };

    const handleChange = () => {
        setOptOut(!optOut);

        if (!hasInteraction.current) {
            setDisabled(false);
            hasInteraction.current = true;
        }
    };

    return (
        <DialogTrigger type='modal'>
            <Button variant='secondary'>Op-Out</Button>
            {(close) => (
                <Dialog size='L'>
                        <Heading>Why your data matters to us.</Heading>
                        <Divider />
                    <Content>
                        <DisclaimerItemWrapper>
                            <div>
                                <Heading>Who we work with</Heading>
                            </div>
                            <div>
                                <Text>
                                    {cookiePageAttributes.firstDisclaimer}
                                </Text>
                            </div>
                        </DisclaimerItemWrapper>

                        <DisclaimerItemWrapper>
                            <div>
                                <Heading>Our policy</Heading>
                            </div>
                            <div>
                                {cookiePageAttributes.secondDisclaimer}
                            </div>
                        </DisclaimerItemWrapper>

                        <DisclaimerItemWrapper>
                            <div>
                                <Heading>What happens to your data</Heading>
                            </div>
                            <div>
                                {cookiePageAttributes.thirdDisclaimer}
                            </div>
                        </DisclaimerItemWrapper>

                        <div>
                            <Checkbox isEmphasized onChange={handleChange} isSelected={optOut}>Opt out of targeted advertising</Checkbox>
                            <div>
                                By checking this box, you will be opted out of targeted advertising on javascript4breakfast.com.
                            </div>
                        </div>
                    </Content>
                    <ButtonGroup>
                        <Button variant="secondary" onPress={close}>Cancel</Button>
                        <Button isDisabled={disabled} variant="accent" onPress={() => onSave(close)} autoFocus>Confirm</Button>
                    </ButtonGroup>
                </Dialog>
            )}
        </DialogTrigger>
    );
}

function CookieAgreement() {
    const [state] = React.useContext(AppContext);
    const {setCookie} = useCookie();

    if (state.hasAgreed) return null;

    return (
        <CookieWrapper>
            <div className='banner'>
                <Text>Cookies and Advertising Choices</Text>
            </div>
            <div className='proceed'>
                <Button onPress={setCookie} variant='accent' autoFocus>
                    Proceed
                </Button>
            </div>
            <div className='opt-out'>
                <CookieDialog />
            </div>
        </CookieWrapper>
    );
}

export default function LandingPage() {
    const [props, api] = useSpring(() => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100,
    }),[]);

    return (
        <div>
            <animated.div style={props}>
                <NavigationWidget />
                <LandingPageGrid>
                    <Banner />
                    <LandingPageDescription />
                </LandingPageGrid>
                <CookieAgreement />
            </animated.div>
        </div>
    );
}