import styled from 'styled-components';
import TopNav from '../../components/TopNav';

const BlogWrapper = styled.div`
    height: 100vh;
    display: grid;
    text-align: center;
    padding: 1em;
`;

export default function BlogPage(){

    return (
        <BlogWrapper>
            <TopNav />
            <div>
                <h1>
                    the breakfast blog
                </h1>
            </div>
            <div>
               Coming soon, please comeback on May 1st 2024 9:00PM PST.
            </div>
        </BlogWrapper>
    )
}