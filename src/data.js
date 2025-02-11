const initialData = [
    {
        id: 1,
        name: 'README.md'
    },
    {
        id: 2,
        name: 'Documents',
        children: [
            {
                id: 3,
                name: 'Word.doc',
            },
            {
                id: 4,
                name: 'Powerpoint.ppt',
            }
        ]
    },
    {
        id: 5,
        name: 'Downloads',
        children: [
            {
                id: 6,
                name: 'Videos',
                children: [
                    {
                        id: 7,
                        name: 'Movie.mp4',
                    },
                    {
                        id: 8,
                        name: 'Series.mp4',
                    }
                ]
            },
            {
                id: 9,
                name: 'Music',
                children: [
                    {
                        id: 10,
                        name: 'Song1.mp3',
                    },
                    {
                        id: 11,
                        name: 'Song2.mp3',
                    }
                ]
            }
        ]
    }
];

export default initialData;