
import React from 'react';
import { TagGroup, Item, } from '@adobe/react-spectrum';
import styled from 'styled-components';
import joortiz from '../../clientlibs/img/joortiz_default.jpg';
import { AppContext } from '../../context/AppContext';
import resumeData from '../../apiData/resume';
import TopNav from '../../components/TopNav';
import ExperienceItem from './ExperienceItem';
import ScheduleMeeting from './ScheduleMeeting';
import logo from '../../clientlibs/img/js4b.png'
import logoAlt from '../../clientlibs/img/js4b_alt.png';

const ResumePageContainer = styled.div`
    display: grid;
    padding: 16px 16px 80px 16px;
    border:t thin solid red;
`;

const ImageAndInfoContainer = styled.div`
    display: grid;
    margin: 16px 0;
    align-items: end;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    grid-column: 5;
    grid-row: 2;
`;

const ImageContainer = styled.div`
    max-height: 7em;
    max-width: 7em;
    grid-column: 2 / 1;
    grid-row: 2 / 2;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;
`;

const ImageWrapper = styled.img`
    object-fit: contain;
`;

const ExperienceGridContainer = styled.div`
    display: grid;
    grid-template-columns: 70vw auto;
    grid-gap: 16px;
    .tag-line-box {
        border-bottom: thin solid;
    }
    .skills-container {
        font-size: 0.9rem;
    }
    .skills-item-wrapper {
    }
    .skills-item-wrapper h3 {
        text-transform: capitalize;
    }
    @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
        .skills-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

const LogoContainer = styled.div`
    height: 100%;
    justify-self: end;
    grid-column: 5 / 5;
    grid-row: 2;
    img {
        max-width: 2.5em;
        transform: scaleX(-1);
    }

    @media (max-width: 560px) {
        grid-column: 5 / 5;
        padding-top: 8px;

        img {
            max-width: 2rem;
            transform: scaleX(-1);
        }
    }
`;

export default function ResumePage() {
    const [state] = React.useContext(AppContext);
    const isDarkMode = state.colorScheme === 'dark';

    const {
        experience,
        locale,
        fullName,
        expDuration,
        brandName,
        skills,
    } = resumeData;

    return (
        <ResumePageContainer>     
            <TopNav />
            <ImageAndInfoContainer>
                <ImageContainer>
                    <ImageWrapper src={joortiz} />
                </ImageContainer>
                <LogoContainer>
                    <img src={isDarkMode ? logoAlt : logo} />
                </LogoContainer>
                
                <InfoContainer>
                    <div>
                        {fullName}
                    </div>
                    <div>
                        Sr. Front End Engineer
                    </div>
                    <div>
                        {locale}
                    </div>
                </InfoContainer>
                
            </ImageAndInfoContainer>
            <ExperienceGridContainer>
                <div>
                    <div className='tag-line-box'>
                        <h2>
                            Experience
                        </h2>
                    </div>
                    <div>
                        {experience.map((item, index) => (
                            <ExperienceItem key={index} item={item} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='tag-line-box'>
                        <h2>
                            Skills
                        </h2>
                    </div>
                    <div className='skills-container'>
                        {skills.map((item, index) => (
                            <div key={index} className='skills-item-wrapper'>
                                <div>
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                                <div>
                                    <TagGroup>
                                        {item.descriptionItems.map((item, index) => (
                                            <Item key={index}>{item}</Item>
                                        ))}
                                    </TagGroup>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ExperienceGridContainer>
            <ScheduleMeeting />
        </ResumePageContainer>
    );
}
