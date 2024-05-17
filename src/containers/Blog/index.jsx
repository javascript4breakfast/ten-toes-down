import React from 'react';
import styled from 'styled-components';
import { Divider, ProgressCircle, Link } from '@adobe/react-spectrum';
import { useParams } from 'react-router-dom';
import blogData from '../../apiData/blogData';
import TopNav from '../../components/TopNav';

import GlobalFooter from '../../components/GlobalFooter';
import { AppContext } from '../../context/AppContext';
const LoaderWrapper = styled.div`
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
`;

const buildImagePath = slug => `/src/clientlibs/img/${slug}.jpg`;

const cokeWhite = `#ebebeb`;

const JumbotronGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    .main-box {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(12, 1fr);
    }

    .lower-box {
        margin-top: 2rem;
    }

    .child-grid {
        grid-column: 2 / 12;
        padding-bottom: 1rem;
    }

    .callout {
        font-size: 2.333rem;
    }
    .title {
        font-size: 1.5rem;
    }
    .author {
        margin: 0.8rem 0;
    }
`;

const ParagraphItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 2rem;
    grid-gap: 1.5rem;
    .grid-item {
        grid-column: 2 / 12;
    }
    p {
        line-height: 2rem;
        font-size: 1.333rem;
        text-align: justify;
    }
`;

const NavWrapper = styled.div`
    padding: 1rem;
`;

function Paragraph(props) {
    return (
        <div className='grid-item'>
            <p>
                {props.item}
            </p>
        </div>
    );
}

function ParagraphItems({ blogItem }) {
    return (
        <>
            <Divider size='M' />
            <ParagraphItemsGrid>
                {blogItem.paragraphs.map((item, index) => (
                    <Paragraph key={index} item={item} />
                ))}
            </ParagraphItemsGrid>
        </>
    );
}

const useDateFormat = date => {
    const publishDate = new Date(date)
    const month = publishDate.toLocaleString('default', { month: 'long' });
    const day = publishDate.toLocaleString('default', { day: 'numeric' });
    const year = publishDate.toLocaleDateString('default', { year: 'numeric' })

    return `${month} ${day}, ${year}`;
}

const percWhite = `#d9d9d9`;
function Jumbotron({ blogItem }) {
    const [{ colorScheme }] = React.useContext(AppContext);
    const _styles = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 99%), url(${buildImagePath(blogItem.slug)}) center / cover no-repeat`,
        minHeight: '20rem',
        ...(colorScheme === 'dark' && {
            color: cokeWhite,
        }),
        ...(colorScheme === 'light' && {
            color: percWhite,
        }),
    };

    const neonStyles = {
        ...(colorScheme === 'dark' && {
            textShadow: `
            0 0 1rem #fff,
            0 0 2rem #fff,
            0 0 4rem #fff,
            0 0 5rem #0fa,
            0 0 6rem #0fa,
            0 0 7rem #0fa,
            0 0 8rem #0fa,
            0 0 9rem #0fa
        `,
        }),
        ...(colorScheme === 'light' && {
            textShadow: `
            0 0 1px #fff,
            0 0 5px #fff,
            0 0 21px #fff,
            0 0 36px #f09,
            0 0 69px #f09,
            0 0 70px #f09,
            0 0 102px #f09,
            0 0 150px #f09
        `,
        }),
    }

    const publishDate = useDateFormat(blogItem.datePosted);
    const [callout, title] = blogItem.title.split(':');

    return (
        <>
            <JumbotronGrid>
                <div className='main-box' style={{..._styles}}>
                    <div className='child-grid'>
                        <div className='callout' style={{ ...neonStyles }}>
                            {callout}
                        </div>
                    </div>
                </div>
                <div className='main-box lower-box'>
                    <div className='child-grid'>
                        <div className='title'>
                            {title}
                        </div>
                        <div className='author'>
                            {publishDate} by <span>Jonathan</span>
                        </div>
                    </div>
                </div>
            </JumbotronGrid>

           


        </>
    );
}

export default function Blog(){
    const [state, setState] = React.useState({ blogItem: null, loading: true });
    const timerId = React.useRef(null);
    const ref = React.useRef(null);
    const { slug } = useParams();
    
    React.useEffect(() => {
        if (ref.current) return;

        const blogItem = blogData.find(item => item.slug === slug);
        
        if (blogItem) {
            setState(prevState => ({
                ...prevState,
                blogItem,
            }));

            ref.current = true;
        }
    }, []);

    React.useEffect(() => {
        if (state.loading) {
            timerId.current = setTimeout(() => {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                }));
            }, 400);
        }
 
        return () => {
            clearTimeout(timerId.current);
        };
    }, [state.loading]);

    if (state.loading) {
        return (
            <LoaderWrapper>
                <ProgressCircle aria-label="Loading…" size="L" isIndeterminate />
            </LoaderWrapper>
        )
    }

    const {blogItem} = state;

    return (
        <div>
            <NavWrapper>
                <TopNav />
            </NavWrapper>
            <Jumbotron blogItem={blogItem} />
            <ParagraphItems blogItem={blogItem} />
            <GlobalFooter />
        </div>
    );
}