import {Divider, Text} from '@adobe/react-spectrum';
import styled from 'styled-components';
import {
    TbServer2,
    TbBrandCss3,
    TbArrowBigDownLines,
    TbBrandMysql,
    TbArrowBigUpLines,
    TbBrandPython,
    TbBrandNodejs,
    TbBrandJavascript,
    TbBrandRedux,
    TbBrandGraphql,
    TbBrandReact,
    TbFileStack,
    TbDeviceMobileCode,
    TbCloudCode,
} from "react-icons/tb";
import { SiRubyonrails, SiExpress, SiFlask } from "react-icons/si";
import { DiRubyRough } from "react-icons/di";
import {GrFolderCycle} from 'react-icons/gr';

const messages = {
    bentoGridMsg: `I specialize in crafting thorough full stack applications, leveraging diverse technologies and integrating provided flow diagrams for seamless development. This enables companies I work with to deliver scalable applications quickly to market.`,
    bentoGridTagLine: `Interested in hiring someone with my skills and expertise?`,
};


const BentoBoxGridWrapper = styled.div`
    display: grid;
    min-height: 10em;
    grid-template-columns: repeat(12, 1fr);
    font-size: 1.333em;

    .child-grid {
        grid-column: 3 / 11;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 6em 2em 6em 2em 6em;
        grid-gap: 8px;
    }

    .box-shadow {
        box-shadow: 1px 1px 8px rgba(100, 100, 100, 0.2);
        justify-items: center;
        align-items: center;
        border-radius: 4px;
    }
    .shrink-text {
        align-self: start;
        font-size: 0.7em;
    }
    .grow-icons {
        font-size: 1.333em;
    }
    .icon-banner {
        align-self: end;
        max-height: 1.333em;
        font-size: 1.8em;
    }

    .client {
        grid-column: 1 / 4;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .micro-service {
        grid-column: 1 / 4;
        grid-row: 3;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .cloud {
        grid-column: 1 / 4;
        grid-row: 5;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .front-end {
        grid-column: 4 / 13;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
        justify-items: center;
        align-items: center;
        border-radius: 4px;
    }

    .middleware {
        grid-column: 4 / 13;
        grid-row: 3;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
        justify-items: center;
        align-items: center;
        border-radius: 4px;
    }
    
    .divider-one {
        grid-row: 2;
        grid-column: 1 / 4;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-content: center;
    }
    
    .divider-two {
        grid-row: 4;
        grid-column: 1 / 4;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-content: center;
        justify-items: center;
        align-items: center;
        border-radius: 4px;
    }
    
    .divider-three {
        grid-row: 2;
        grid-column: 4 / 13;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-content: center;
        justify-items: center;
        align-items: center;
        border-radius: 4px;
    }
    
    .divider-four {
        grid-column: 4 / 13;
        grid-row: 4;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        align-content: center;
        justify-items: center;
        align-items: center;
        border-radius: 4px;
    }
    
    .back-end {
        grid-column: 4 / 13;
        grid-row: 5;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        justify-items: center;
    }
    
    @media (max-width: 625px) {
        .child-grid {
            grid-column: 2 / 12;
        }
    }
    
    @media (max-width: 525px) {
        padding: 0 0.8em;
        .child-grid {
            grid-column: 1 / 13;
        }
    }
`;

const BentoGridBanner = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    .child-grid {
        grid-column: 3 / 11;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: auto auto;
        grid-gap: 8px;
        padding-bottom: 0.333em;
    }
    .divider {
        grid-column: 1 / 13;
        margin-top: 1em;
    }
    .tag-line {
        grid-column: 1 / 13;
        font-size: 1.333em;
    }
    .outline {
        grid-column: 1 / 13;
    }
    .stack {
        grid-column: 1 / 4;
        padding: 0.333em 0;
        align-self: end;
        display: flex;
        flex-direction: column;
    }
    
    .tech {
        grid-column: 4 / 13;
        padding: 0.333em 0;
        align-self: end;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 625px) {
        .child-grid {
            grid-column: 2 / 12;
        }
    }
    
    @media (max-width: 525px) {
        .child-grid {
            padding: 0 1em;
            grid-column: 1 / 13;
        }
    }
`;

export default function BentoBox() {
    return (
        <>
            <BentoGridBanner>
                <div className='child-grid'>
                    <div className='divider'>
                        <Divider size="S" />
                    </div>
                    <div className='tag-line'>
                        {messages.bentoGridTagLine}
                    </div>
                    <div className='outline'>
                        {messages.bentoGridMsg}
                    </div>
                    <div className='stack'>
                        <div>
                            <GrFolderCycle />
                        </div>
                        <div>Life Cycle</div>
                    </div>
                    <div className='tech'>
                        <div>
                            <TbFileStack />
                        </div>
                        <div>Tech Stack</div>
                    </div>
                </div>
            </BentoGridBanner>
            <BentoBoxGridWrapper>
                <div className='child-grid'>
                    <div className='client box-shadow'>
                        <div className='icon-banner'>
                            <TbDeviceMobileCode />
                        </div>
                        <div className='shrink-text'>
                            <Text>Client App</Text>
                        </div>
                    </div>
                    <div className='micro-service box-shadow'>
                        <div className='icon-banner'>
                            <TbServer2 />
                        </div>
                        <div className='shrink-text'>
                            <Text>Micro Services</Text>
                        </div>
                    </div>
                    <div className='cloud box-shadow'>
                        <div className='icon-banner'>
                            <TbCloudCode />
                        </div>
                        <div className='shrink-text'>
                            Serverless
                        </div>
                    </div>
                    <div className='divider-one'>
                        <div>
                            <TbArrowBigDownLines />
                        </div>
                        <div>
                            <TbArrowBigUpLines />
                        </div>
                    </div>
                    <div className='divider-two'>
                        <div>
                            <TbArrowBigDownLines />
                        </div>
                        <div>
                            <TbArrowBigUpLines />
                        </div>
                    </div>
                    <div className='divider-three'>
                        <div>
                            <TbArrowBigDownLines />
                        </div>
                        <div>
                            <TbArrowBigUpLines />
                        </div>
                    </div>
                    <div className='divider-four'>
                        <div>
                            <TbArrowBigDownLines />
                        </div>
                        <div>
                            <TbArrowBigUpLines />
                        </div>
                    </div>
                    <div className='front-end box-shadow grow-icons'>
                        <div>
                            <TbBrandReact />
                        </div>
                        <div>
                            <TbBrandRedux />
                        </div>
                        <div>
                            <TbBrandJavascript />
                        </div>
                        <div>
                            <TbBrandCss3 />
                        </div>
                    </div>
                    <div className='middleware box-shadow'>
                        <div>
                            <SiFlask />
                        </div>
                        <div>
                            <SiExpress />
                        </div>
                        <div>
                            <TbBrandGraphql />
                        </div>
                        <div>
                            <SiRubyonrails />
                        </div>
                    </div>
                    <div className='back-end box-shadow'>
                        <div>
                            <TbBrandNodejs />
                        </div>
                        <div>
                            <TbBrandPython />
                        </div>
                        <div>
                            <TbBrandMysql />
                        </div>
                        <div>
                            <DiRubyRough />
                        </div>
                    </div>
                </div>
            </BentoBoxGridWrapper>
        </>
    );
}