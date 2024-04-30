
import { TagGroup, Item, } from '@adobe/react-spectrum';
import styled from 'styled-components';
import { TiMinusOutline } from 'react-icons/ti';

const CompanyInfoRow = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    margin: 8px 0;
    align-items: end;
`;

const FlexCenterLeft = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const ItemDescriptionContainer = styled.div`
    font-size: 0.9rem;
`;
const ProjectContainer = styled.div`
    border-bottom: thin dotted;
    display: grid;
    grid-template-columns: 1.333rem auto;
    padding: 4px;
    font-size: 0.9rem;
`;

export default function ExperienceItem(props) {
    return (
        <>
            <CompanyInfoRow>
                <div>
                    <div>
                        <h3>
                            {props.item.company}
                        </h3>
                    </div>
                    <div>
                        <p>
                            {props.item.title}
                        </p>
                    </div>
                </div>
            
                <FlexCenterLeft>
                    <h4>
                        {props.item.timeWorked}
                    </h4>
                </FlexCenterLeft>
            </CompanyInfoRow>
            <ItemDescriptionContainer>
                <p>
                    {props.item.description}
                </p>
            </ItemDescriptionContainer>
            {props?.item?.projects && (
                <ProjectContainer>
                    <div>
                        <TiMinusOutline />
                    </div>
                    <div>
                        {props.item.projects.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <h4>{item.title}</h4>
                                </div>
                                <div>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <TagGroup>
                                        {item.tags.map((item, index) => (
                                            <Item key={index}>{item}</Item>
                                        ))}
                                    </TagGroup>
                                </div>
                            </div>
                        ))}
                    </div>
                </ProjectContainer>
            )}
        </>
    );
}