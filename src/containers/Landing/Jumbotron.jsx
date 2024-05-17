import styled from 'styled-components';
import {Button,Well} from '@adobe/react-spectrum';
import logo from '../../clientlibs/img/js4b_alt.png';
import {useNavigate} from 'react-router-dom';

import { LandingPageGridItem } from '../../styled';

const InnerWellGrid = styled.div`
    padding: 2em 0;
    display: grid;
    justify-items: center;
    grid-gap: 8px;

    .logo-img {
        max-width: 5em;
    }

    .headline-row {
        text-align: center;
        max-width: 25rem;
    }

    .btns-row {
        display: grid;
        margin-top: 0.5em;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 0.8rem;
        justify-self: stretch;
        align-self: center;
    }
    .res-btn {
        display: grid;
        grid-column: 3 / 7;
    }

    .blog-btn {
        display: grid;
        grid-column: 7 / 11;
    }

    @media(max-width: 650px) {
        .logo-img {
            max-width: 3em;
        }
        .res-btn {
            grid-column: 1 / 7;
        }
        .blog-btn {
            grid-column: 7 / 13;
        }
    }
`;

const headline = `Proficient in Software Development, Software-as-a-Service (SaaS), Single Page Applications (SPAs), and Cloud Technologies, I excel in crafting immersive user interfaces. By harnessing cutting-edge frameworks, I innovate to ensure seamless cross-platform functionality.`;


export default function Jumbotron() {
    const navigate = useNavigate();

    const navigateTo = (page) => {
        navigate(page);
    }

    return (
        <LandingPageGridItem>
            <Well>
                <InnerWellGrid>
                    <div className='logo-row'>
                        <img className='logo-img' src={logo} />
                    </div>
                    <div className='title-row'>
                        <h1>
                            Jonathan Ortiz
                        </h1>
                    </div>
                    <div className='headline-row'>
                        {headline}
                    </div>
                    <div className='btns-row'>
                        <div className='res-btn'>
                            <Button onPress={() => navigateTo('/resume')} variant='accent'>
                                Resume
                            </Button>
                        </div>
                        <div className='blog-btn'>
                            <Button onPress={() => navigateTo('/blog')} variant='secondary'>
                                Blog
                            </Button>
                        </div>
                    </div>
                </InnerWellGrid>
            </Well>
        </LandingPageGridItem>
    );
}