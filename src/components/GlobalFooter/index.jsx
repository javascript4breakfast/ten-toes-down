import styled from 'styled-components';

const MadeInWrapper = styled.div`
    padding: 1.333em;
    text-align: center;
    margin-top: 1em;
`;

export default function GlobalFooter() {
    return (
        <MadeInWrapper>
            <div>
                Made with ❤️ in San Francisco
            </div>
            <div>
                © 2024 javascript4breakfast, Inc. All Rights Reserved.
            </div>
        </MadeInWrapper>
    );
}