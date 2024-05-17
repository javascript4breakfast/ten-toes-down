import styled from 'styled-components';

export const LandingPageGridItem = styled.div`
    grid-column: 3 / 11;

    @media(max-width: 650px) {
        grid-column: 2 / 12;
    }
`;