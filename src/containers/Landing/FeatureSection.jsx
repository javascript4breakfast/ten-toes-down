import styled from 'styled-components';
import {Button, Divider} from '@adobe/react-spectrum';
import { FcInTransit, FcIdea, FcHeatMap, FcSearch } from "react-icons/fc";
import {useNavigate} from 'react-router-dom';
import { LandingPageGridItem } from '../../styled';

const FeatureSectionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0.5rem 1em;
    padding: 1em 0;

    .box-item-title {
        grid-column: 1 / 13;
        font-size: 1.333rem;
    }

    .box-item-left {
        grid-row: 3 / 10;
        grid-column: 1 / 7;
        display: grid;
        align-content: center;
        grid-gap: 8px;
        padding: 1em;
        border-radius: 0.333rem;
        box-shadow:
            inset 0 -3em 3em rgb(0 0 0 / 10%),
            0 0 0 0px white,
            0.3em 0.3em 0.5em rgb(0 0 0 / 10%);
    }
    
    .left-title {
        align-self: end;
        font-size: 1.333rem;
    }
    
    .left-text {
        align-self: center;
        padding-right: 1em;
    }
    
    .left-btn {
        align-self: start;
    }
    
    .box {
        display: grid;
        grid-template-rows: auto auto;
        border-radius: 0.333rem;
        box-shadow:
            inset 0 -3em 3em rgb(0 0 0 / 10%),
            0 0 0 0px white,
            0.3em 0.3em 0.5em rgb(0 0 0 / 10%);
        padding: 0.333rem;
    }

    .icon {
        font-size: 1.8em;
    }

    .box-item-1 {
        grid-row: 3 / 6;
        grid-column: 7 / 10;
    }
    
    .box-item-2 {
        grid-row: 3 / 6;
        grid-column: 10 / 13;
    }
    
    .box-item-3 {
        grid-row: 7 / 10;
        grid-column: 7 / 10;
    }
    
    .box-item-4 {
        grid-row: 7 / 10;
        grid-column: 10 / 13;
    }

    @media(max-width: 850px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
        grid-gap: 0;

        .box-item-title {
            grid-row: 1;
            max-height: 3rem;
        }

        .box-item-left {
            grid-row: 2;
            margin: 1rem 0;
        }

        .box-item-1 {
            grid-row: 4 / 6;
            grid-column: 1 / 13;
            margin-bottom: 1rem;
        }

        .box-item-2 {
            grid-row: 6 / 8;
            grid-column: 1 / 13;
            margin-bottom: 1rem;
        }

        .box-item-3 {
            grid-row: 8 / 10;
            grid-column: 1 / 13;
            margin-bottom: 1rem;
        }

        .box-item-4 {
            grid-row: 10 / 12;
            grid-column: 1 / 13;
            margin-bottom: 1rem;
        }
    }
`;

export default function FeatureSection() {
    const navigate = useNavigate();

    const navigateTo = page => navigate(page);

    return (
        <LandingPageGridItem>
            <FeatureSectionGrid>
                <div className='box-item-title'>
                    <div>
                        <h4>
                            What I've Been Working On
                        </h4>
                    </div>
                    <div>
                        <Divider size="S" />
                    </div>
                </div>
                <div className='box-item-left'>
                    <div className='left-title'>
                        <h3>
                            Paramount+ - Sr.Software Engineer
                        </h3>
                    </div>
                    <div className='left-text'>
                        Enhancing and upkeeping a SmartTV React app involves adding features and ensuring compatibility across platforms.
                    </div>
                    <div className='left-btn'>
                        <Button onPress={() => navigateTo('/player')} variant='accent'>
                            Watch
                        </Button>
                    </div>
                </div>
                <div className='box box-item-1'>
                    <div>
                        <FcInTransit className='icon' />
                    </div>
                    <div>
                        Collaborate across teams to develop new services, tools, and data models that streamline our workflows on a large scale.
                    </div>
                </div>
                <div className='box box-item-2'>
                    <div>
                        <FcIdea className='icon' />
                    </div>
                    <div>
                        Join product reviews and team meetings, offering technical insights. Aid in scoping, estimating, and prioritizing conflicting needs.
                    </div>
                </div>
                <div className='box box-item-3'>
                    <div>
                        <FcHeatMap className='icon' />
                    </div>
                    <div>
                        Assess fresh technologies and methods to enhance and streamline our rapid application development tools and practices.
                    </div>
                </div>
                <div className='box box-item-4'>
                    <div>
                        <FcSearch className='icon' />
                    </div>
                    <div>
                        Continuously acquire knowledge of evolving systems and tools within the Video platform and ecosystem.
                    </div>                
                </div>
            </FeatureSectionGrid>
            <Divider size='S' />
        </LandingPageGridItem>
    );
}