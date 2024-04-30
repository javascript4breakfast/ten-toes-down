import { v4 as uuidv4 } from 'uuid';

function generateMediaAsset(props) {
    const { artist, title, description, mediaUrl, source } = props;
    return {
        id: uuidv4(),
        artist,
        title,
        description,
        mediaUrl,
        source,
    };
}

const videoAssets = [
    {
        id: uuidv4(),
        artist: 'The Cinematic Orchestra',
        title: 'To Build A Home',
        description: `The Cinematic Orchestra - To Build A Home`,
        mediaUrl: 'https://www.youtube.com/watch?v=oUFJJNQGwhk',
        source: 'youtube',
    },
    {
        id: uuidv4(),
        description: 'Brief History of the Royal Family',
        artist: 'GCP Grey',
        title: 'Brief History of the Royal Family',
        mediaUrl: 'https://www.youtube.com/watch?v=jNgP6d9HraI',
        source: 'youtube',
    },
    {
        id: uuidv4(),
        description: 'Every Disney Classic and Pixar Movie in order',
        artist: 'T.W.M. Ashford',
        title: 'Disney+ Pixar Marathon Playlist',
        mediaUrl: 'https://www.youtube.com/playlist?list=PLogRWNZ498ETeQNYrOlqikEML3bKJcdcx',
        source: 'youtube',
    },
    {
        id: uuidv4(),
        description: 'Miami Nights 1984',
        artist: 'Michael Glover',
        title: 'Miami Nights 1984',
        mediaUrl: 'https://soundcloud.com/miami-nights-1984/accelerated',
        source: 'soundcloud'
    },
    {
        id: uuidv4(),
        description: 'Tycho',
        artist: 'Tycho',
        title: 'Awake',
        mediaUrl: 'https://soundcloud.com/tycho/tycho-awake',
        source: 'soundcloud'
    },
    {
        id: uuidv4(),
        description: 'DopeRapTraxxx',
        artist: 'Young OG Beats',
        title: 'DopeRapTraxxx',
        mediaUrl: 'https://soundcloud.com/yunghog/sets/doperaptraxxx',
        source: 'soundcloud',
    },
    {
        id: uuidv4(),
        description: 'mux video one',
        artist: 'MUX',
        title: 'Test Video 1',
        mediaUrl: 'https://stream.mux.com/maVbJv2GSYNRgS02kPXOOGdJMWGU1mkA019ZUjYE7VU7k',
        source: 'mux',
    },
    {
        id: uuidv4(),
        description:'mux video two',
        artist: 'MUX',
        title: 'Test Video 2',
        mediaUrl: 'https://stream.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008',
        source: 'mux',
    },
    {
        id: uuidv4(),
        description:'AutoMod promo Video',
        artist: 'Twitch',
        title: 'AutoMod promo Video',
        mediaUrl: 'https://www.twitch.tv/videos/106400740',
        source: 'twitch',
    },
    {
        id: uuidv4(),
        description:'Kronovi Live Stream',
        artist: 'Twitch',
        title: 'Kronovi Live Stream',
        mediaUrl: 'https://www.twitch.tv/kronovi',
        source: 'twitch',
    },
    {
        id: uuidv4(),
        description: 'Cow Moo Moo',
        artist: 'Streamable',
        title: 'Cow Moo Moo',
        mediaUrl: 'https://streamable.com/moo',
        source: 'streamable',
    },
    {
        id: uuidv4(),
        description: 'Bow Wow Wow',
        artist: 'Streamable',
        title: 'Bow Wow Wow',
        mediaUrl: 'https://streamable.com/ifjh',
        source: 'streamable',
    },
];

// MORE VIDEO ASSETS
const wistiaAssetOne = generateMediaAsset({
    artist: 'Wistia',
    title: 'The clapper',
    description: 'The clapper',
    mediaUrl: 'https://home.wistia.com/medias/e4a27b971d',
    source: 'wistia',
});

const wistiaAssetTwo = generateMediaAsset({
    artist: 'Wistia',
    title: 'The Wistia Banner',
    description: 'The Wistia Banner',
    mediaUrl: 'https://home.wistia.com/medias/29b0fbf547',
    source: 'wistia',
});

const wistiaAssetThree = generateMediaAsset({
    artist: 'Wistia',
    title: 'The Delivery Doggy',
    description: 'The Delivery Doggy',
    mediaUrl: 'https://home.wistia.com/medias/bq6epni33s',
    source: 'wistia',
});

videoAssets.push(wistiaAssetOne);
videoAssets.push(wistiaAssetTwo);
videoAssets.push(wistiaAssetThree);

export {
    videoAssets,
}