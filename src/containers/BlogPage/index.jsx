import React from 'react';
import {
    Button,
    Badge,
    Divider,
    Item,
    LogicButton,
    Tabs,
    TabList,
    Text,
    Well,
    View,
} from '@adobe/react-spectrum';
import {Link, useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import TopNav from '../../components/TopNav';
import blogData from '../../apiData/blogData';
import {v4 as uuidv4} from 'uuid';
import { truncateString } from '../../utils';
import GlobalFooter from '../../components/GlobalFooter';
import { IoClose } from 'react-icons/io5';

const blogCategories = [
    {
        id: uuidv4(),
        textValue: 'tech',
    },
    {
        id: uuidv4(),
        textValue: 'design',
    },
    {
        id: uuidv4(),
        textValue: 'crypto',
    },
    {
        id: uuidv4(),
        textValue: 'science',
    },
];

const pageAttributes = {
    blogData: blogData.filter(x => !x.isFeatured),
    featuredBlog: blogData.find(x => x.isFeatured),
    bannerTitle: `The Breakfast Bulletin`,
    blogCategories,
};

const Grid = styled.div`
    display: grid;
`;

const BlogGrid = styled(Grid)`
    grid-template-columns: repeat(12, 1fr);
    padding: 1em;

    .nav-wrapper {
        grid-column: 1 / 14;
    }
`;

const BlogChildGrid = styled.div`
    margin-top: 1em;
    grid-row: 2;
    grid-column: 2 / 12;

    .banner {
        font-family: "Times New Roman", Times, serif;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
    }
    .heading {
        font-style: italic;
        font-weight: bold;
        font-size: 2em;
    }
    .sub {
        font-size: 0.8em;
        font-weight: normal;
        font-style: normal;
    }

    .menu {
        display: grid;
    }

    @media(max-width: 725px) {
        .banner {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media(max-width: 625px) {
        grid-column: 2 / 12;
    }

    @media(max-width: 525px) {
        grid-column: 1 / 13;
    }
`;

const Capitalize = styled.p`
    text-transform: capitalize;
`;

const WellGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto auto auto;
    grid-gap: 1em;

    .title {
        grid-column: 1 / 6;
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-weight: bold;
        font-size: 2em;
        line-height: 1em;
    }

    .preview {
        grid-column: 1 / 6;
        grid-row: 2;
        font-size: 1em;
    }

    .link {
        grid-row: 3;
        grid-column: 1 / 13;
    }

    @media(max-width: 825px) {
        .title {
            grid-column: 1 / 9;
        }
        .preview {
            grid-column: 1 / 9;
        }
    }

    @media(max-width: 525px) {
        .title {
            grid-column: 1 / 13;
        }
        .preview {
            grid-column: 1 / 13;
        }
    }
`;

const SubFeaturedGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 1em;
    margin-top: 1em;
    
    .box-1 {
        grid-column: 1 / 7;
    }
    .box-2 {
        grid-column: 7 / 13;
        display: grid;
    }
    @media(max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);

        .box-1 {
            grid-column: 1 / 13;
        }
        .box-2 {
            grid-row: 2;
            grid-column: 1 / 13;
            
        }

    }
`;

const WellWrapper = styled.div`
    margin-top: 1em;
`;

const ViewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    .left-col {
        grid-column: 1 / 8;
        display: grid;
        min-height: 100%;
        grid-template-columns: repeat(1, 1fr);
        padding: 1em;
        grid-gap: 8px;
    }
    .right-col {
        grid-column: 8 / 13;
        display: grid;
    }
    .col-img {
        max-width: 100%;
        min-height: 100%;
        object-fit: cover;
        border-radius: 0 0.5em 0.5em 0;
    }

    .text-container {
        line-height: 1.333em;
        display: grid;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* number of lines to show */
                line-clamp: 6; 
        -webkit-box-orient: vertical;
    }
`;

const placeholderImg = "https://i.imgur.com/Z7AzH2c.png";

const monthsOfTheYear = [
    'Janurary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const buildImagePath = slug => `/src/clientlibs/img/${slug}.jpg`;

function Card(props) {
    const [title] = props.item.title.split(': ');
    const colorMap = {
        tech: 'seafoam',
        design: 'indigo',
        crypto: 'fuchsia',
        science: 'yellow',
    };
    const datePosted = new Date(props.item.datePosted).getMonth();
    const month = monthsOfTheYear[datePosted];
    const previewText = truncateString(props.item.paragraphs[0], 200);
    const tuncTitle = truncateString(title, 20)

    return (
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
            >
                <ViewGrid>
                    <div className='left-col'>
                        <div>
                            <Badge variant={colorMap[props.item.category]}>
                                {props.item.category}            
                            </Badge>
                        </div>
                        
                        <div>{tuncTitle}</div>
                        
                        <div>
                            {month}
                        </div>
                        <div className='text-container'>
                            {previewText}
                        </div>
                        <div>
                            <Link to={`/blogs/${props.item.slug}`}>
                                Continue Reading...
                            </Link>
                        </div>
                    </div>
                    <div className='right-col'>
                        <img className='col-img' src={buildImagePath(props.item.slug)} />
                    </div>
                </ViewGrid>
            </View>

    );
}

function SubFeaturedBlog({ category }) {
    const [subBlogs, setSubBlogs] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
    const loadedOnce = React.useRef(null);

    React.useEffect(() => {
        const blog = blogData.filter(x => x.category !== category.textValue && x.isFeatured);
        const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)].id;
        const randomBlogId = getRandomItem(blog);
        const filtered = blog.filter(x => x.id !== randomBlogId);

        setSubBlogs(filtered);
        setLoaded(true);

        loadedOnce.current = true;
    }, [category]);

    if (!loaded) return null;

    return (
        <SubFeaturedGrid>
            {subBlogs.map((item, index) => (
                <div className={`box-${index + 1}`} key={item.id}>
                    <Card item={item} />
                </div>
            ))}
        </SubFeaturedGrid>
    );
}

function FeaturedBlog({ category }){
    const navigate = useNavigate();
    const [featuredBlog, setFeaturedBlog] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
    const linkText = `Continue Reading`

    React.useEffect(() => {
        const blog = blogData.find(x => x.category === category.textValue && x.isFeatured);
        setFeaturedBlog(blog);
        setLoaded(true);
    }, [category]);
    
    const onContinueReading = () => {
        navigate(`/blogs/${slug}`);
    };

    if (!loaded || !featuredBlog) return null;

    const { title, paragraphs, slug } = featuredBlog;
    const previewText = truncateString(paragraphs[0], 160);

    return (
        <WellWrapper>
            <Well>
                <WellGrid>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='preview'>
                        <div>
                            {previewText}
                        </div>
                    </div>
                    <div className='link'>
                        <Button variant='accent' onPress={onContinueReading}>
                            {linkText}
                        </Button>
                    </div>
                </WellGrid>
            </Well>
        </WellWrapper>
    );
}

const BottomRowGrid = styled.div`
    padding-top: 0.5rem;
    grid-row: 4;
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 1em;
    grid-gap: 1em;
    .box-show {
        margin-top: 1em;
    }
    .box-hide {
        margin-top: 0;
    }

    .grape-vine {
        grid-column: 1 / 9;

    }
    .grape-vine-header {
        font-size: 1.333em;
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-weight: bold;
    }
    
    .more {
        grid-column: 9 / 13;
    }

    @media(max-width: 650px) {
        grid-column: 2 / 12;
    }
    
    @media(max-width: 550px) {
        grid-column: 1 / 13;

        grid-template-columns: repeat(1, 1fr);
        
        .more {
            grid-column: 1 / 13;
        }
        
        .grape-vine {
            grid-row: 2;
            grid-column: 1 / 13;
        }

    }
`;

const aboutString = `All writers, publications, and content featured on this website have been personally sourced by me and are intended solely for entertainment purposes, and may have been generated by A.I.`

const WellInnerGrid = styled.div`
    .dismiss {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        margin-bottom: 1em;
    }

    .note {
        grid-column: 1 / 10;
    }
    .close {
        grid-column: 10 / 13;
        display: flex;
        justify-content: flex-end;
    }
`;

const sortByDate = (arr) => {
    return arr.sort((a,b) => Date.parse(b.datePosted) - Date.parse(a.datePosted)).slice(0, 3);
}

const PostItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8px;

    .divider {

    }

    .child-grid {
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        grid-gap: 0.333em;
    }
    .thumb-parent {
        grid-column: 1 / 2;

    }
    .text-parent {
        grid-column: 2 / 13;
    }
    .thumb {
        height: 3em;
        min-width: 4em;
        object-fit: cover;
        border-radius: 0.1em;
    }
    .header {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
                line-clamp: 1; 
        -webkit-box-orient: vertical;
    }
`;


function RecentPostItem(props) {
    const navigate = useNavigate();
    const date = new Date(props.item.datePosted);
    const month = monthsOfTheYear[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <PostItemGrid onClick={() => navigate(`/blogs/${props.item.slug}`)}>
            <div className='divider'>
                <Divider size='S' />
            </div>
            <div className='child-grid'>
                <div className='thumb-parent'>
                    <img className='thumb' src={buildImagePath(props.item.slug)}/>
                </div>
                <div className='text-parent'>
                    <div className='header'>
                        {props.item.altHeader}
                    </div>
                    <div className='date'>
                        {`${month} ${day}, ${year}`}
                    </div>
                </div>   
            </div>
        </PostItemGrid>
    );
}

const RecentPostItemParent = styled.div`
    display: grid;
    grid-gap: 0.333em;
    min-height: 13em;
    .child-wrapper {
        display: grid;
        cursor: pointer;
        align-content: center;
        grid-gap: 8px;
        transition: box-shadow,color 200ms ease-in 50ms;
    }

    .child-wrapper:hover {
        color: dodgerblue;
        box-shadow:
            inset 0 -3em 3em rgb(0 0 0 / 10%),
            0 0 0 0px white,
            0.3em 0.3em 0.5em rgb(0 0 0 / 10%);
        
        transition: color 200ms ease-out 50ms;
        transition: box-shadow 200ms ease-out 50ms;
    }
`;

function RecentPosts() {
    const [data, setData] = React.useState(null);
    const ref = React.useRef(false);
    
    React.useEffect(() => {
        if (ref.current) return;
        
        const shallowCopy = [
            ...blogData,
        ].filter(x => !x.isFeatured);

        const _data = sortByDate(shallowCopy);
        setData(_data);        
        ref.current = true;
    }, []);

    if (!data) return;

    return (
        <RecentPostItemParent>
            {data.map((item) => (
                <div className='child-wrapper' key={item.id}>
                    <RecentPostItem item={item} />
                </div>
            ))}
        </RecentPostItemParent>
    );
}

const GrapeVinePostGrid = styled.div`
    h1 {
        font-weight: bold;
        font-family: "Times New Roman", Times, serif;
    }

    .date {
        margin-bottom: 0.5rem;
    }

    .paragraph-grid {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 1em;
    }

    .paragraph {
        font-size: 1.333rem;
    }
`;

function GrapeVineBlog(){
    const {title, datePosted, paragraphs} = blogData.find(x => x.isGrapeVine);
    const publishDate = new Date(datePosted)
    const month = publishDate.toLocaleString('default', { month: 'long' });
    const day = publishDate.toLocaleString('default', { day: 'numeric' });

    return (
        <GrapeVinePostGrid>
            <div>
                <h1>{title}.</h1>
            </div>
            <div className='date'>
                {month}, {day} {publishDate.getFullYear()} By: Jonathan
            </div>
            <div className='paragraph-grid'>
                {paragraphs.map((item, index) => (
                    <div className='paragraph' key={index}>
                        <Text>
                            {item}
                        </Text>
                    </div>
                ))}
            </div>
        </GrapeVinePostGrid>
    );
}

function GrapeVine() {
    const [show, setShow] = React.useState(true);

    return (
        <BottomRowGrid>
            <div className='grape-vine'>
                <div>
                    <p className='grape-vine-header'>
                        🍇 From the Grapevine
                    </p>
                </div>
                <div>
                    <Divider size='S' />
                </div>
                <GrapeVineBlog />
            </div>
            <div className='more'>
                {show && (
                    <Well>
                        <WellInnerGrid>
                            <div className='dismiss'>
                                <div className='note'>
                                    <p>
                                        📝 Please Note
                                    </p>
                                </div>
                                <div className='close'>
                                    <LogicButton onPress={() => setShow(false)}>
                                        <IoClose />
                                    </LogicButton>
                                </div>
                            </div>
                            <div>
                                {aboutString}
                            </div>
                        </WellInnerGrid>
                    </Well>
                )}
                <div className={show ? 'box-show' : 'box-hide'}>
                    <p className='grape-vine-header'>
                       ⌚️ Recent Posts
                    </p>
                </div>
                <RecentPosts />
            </div>
        </BottomRowGrid>
    )
}

export default function BlogPage(){
    const [category, setCategory] = React.useState(blogCategories[0]);
    
    const onSetCategory = (id) => {
        const next = blogCategories.find(x => x.id === id);
        setCategory(next);
    };

    return (
        <>
            <BlogGrid>
                <div className='nav-wrapper'>
                    <TopNav />
                </div>
                <BlogChildGrid>
                    <div className='banner'>
                        <div className='heading'>
                            <p>
                                {pageAttributes.bannerTitle}
                            </p>
                        </div>
                        <div className='sub'>
                            <p>
                                New Posts Mosts Sundays*
                            </p>
                        </div>
                    </div>
                        <Divider size='S' />
                            <Tabs density='compact' isEmphasized onSelectionChange={onSetCategory} aria-label="The Breakfast Blog Categories">
                                <TabList>
                                    {blogCategories.map((item) => (
                                        <Item key={item.id}>
                                            <Capitalize>
                                                {item.textValue}
                                            </Capitalize>
                                        </Item>
                                    ))}
                                </TabList>
                            </Tabs>
                        <FeaturedBlog category={category} />
                        <SubFeaturedBlog category={category} />
                    </BlogChildGrid>
                <GrapeVine />
            </BlogGrid>
            <GlobalFooter />
        </>
    );
}