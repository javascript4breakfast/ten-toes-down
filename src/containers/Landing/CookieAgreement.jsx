import React from 'react';
import {
    Button,
    ButtonGroup,
    Checkbox,
    DialogTrigger,
    Dialog,
    Divider,
    Content,
    Heading,
    Text,
} from '@adobe/react-spectrum';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import useCookie from '../../hooks/useCookie';
import { PiCookieDuotone } from "react-icons/pi";
import { LandingPageGridItem } from '../../styled';

const cookiePageAttributes = {
    dialogTitle: `Cookies and Advertising Choices`,
    firstDisclaimer: `We work with trusted partners to provide relevant advertising based on information about your use of javascript4breakfast and third-party websites and applications.`,
    secondDisclaimer: `javascript4breakfast values your privacy. We do not sell your personal information. If you’d like to know more about how javascript4breakfast protects your privacy please visit our Privacy Notice.`,
    thirdDisclaimer: `When you see advertising on javascript4breakfast, we try to make it relevant by referring to information about you and your activities which you share with javascript4breakfast and our affiliated companies, such as our parent company, Amazon.com, Inc. This may include information like your location or the categories of content you watch. In some cases, javascript4breakfast may work with trusted third-party advertising partners to provide what is sometimes called “targeted advertising” or “cross-contextual advertising.” This form of advertising allows us to further personalize the advertising you see by incorporating information about your activities on third-party websites and applications across the internet. When we work with third-parties in this way, we may share some of your personal data, for example by using cookies or other technologies, but we do not use or share information which on its own identifies you, such as name or email address. You have the right to opt-out of targeted advertising by preventing sharing of your personal data with third-parties for advertising purposes. To do so, please use the checkbox below.`,
};

const DisclaimerItemWrapper = styled.div`
    margin-bottom: 1em;
`;

const CookieWrapper = styled.div`
    display: grid;
    margin-top: 1rem;
    border-radius: 0.333rem;
    box-shadow:
        inset 0 -3em 3em rgb(0 0 0 / 10%),
        0 0 0 0px white,
        0.3em 0.3em 0.5em rgb(0 0 0 / 10%);

    .parent-col {
        padding: 1em;
        display: grid;
        grid-template-columns: auto auto;
    }
    .text-row {
        align-self: center;
        display: flex;
    }
    .btn-row {
        display: flex;
        justify-content: flex-end;
        grid-gap: 0.333em;
    }

    .icon {
        margin-top: 0.2rem;
        margin-right: 0.3rem;
        font-size: 1.333rem;
    }

    @media (max-width: 625px) {
        .parent-col {
            display: grid;
            grid-template-columns: auto;
            grid-column: 1 / 13;
            grid-gap: 0.5rem;
            justify-self: center;
        }
    }

`;

function CookieDialog() {
    const [optOut, setOptOut] = React.useState(true);
    const {setCookie} = useCookie();
    const onSave = (callback) => {
        setCookie();
        callback();
    };

    const handleChange = () => {
        setOptOut(!optOut);
    };

    return (
        <DialogTrigger type='modal'>
            <Button autoFocus variant='secondary' aria-label='opt-out settings'>Opt-Out Settings</Button>
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
                        <Button variant="accent" onPress={() => onSave(close)}>Confirm</Button>
                    </ButtonGroup>
                </Dialog>
            )}
        </DialogTrigger>
    );
}

export default function CookieAgreement() {
    const [state] = React.useContext(AppContext);
    const {setCookie} = useCookie();

    if (state.hasAgreed) return null;

    return (
        <LandingPageGridItem>
            <CookieWrapper>
                <div className='parent-col'>
                    <div className='text-row'>
                        <PiCookieDuotone className='icon' />
                        <Text>Cookies and Advertising Choices</Text>
                    </div>
                    <div className='btn-row'>
                        <Button aria-label='opt-out proceed' onPress={setCookie} variant='accent'>
                            Proceed
                        </Button>
                        <CookieDialog />
                    </div>
                </div>
            </CookieWrapper>
        </LandingPageGridItem>
    );
}