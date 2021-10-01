export enum DifficultyLabel {
    B = '초급',
    I = '중급',
    E = '고급'
}

export enum LanguageType {
    K = '한국어',
    E = '영어'
}

export const SHORTCUT_LINK = [
    {
        name: '발표 시간표',
        url: '/session'
    },
    {
        name: '파이콘 한국 유튜브',
        url: 'https://www.youtube.com/c/PyConKRtube'
    },
    {
        name: '티켓 구입',
        url: 'https://festa.io/events/1788'
    }
];

export const ROUTES = [
    {
        name: 'ABOUT',
        path: ' /about',
        routeType: 'single'
    },
    {
        name: '기여하기',
        path: '/contribute',
        routeType: 'single'
    },
    {
        name: '프로그램',
        routeType: 'nested',
        routeGroup: [
            {
                name: '발표 시간표',
                path: '/session'
            },
            {
                name: '발표 목록',
                path: '/session/list'
            },
            {
                name: '문자통역 안내',
                path: '/session/speech-to-text'
            }
        ]
    },
    {
        name: '후원하기',
        routeType: 'nested',
        routeGroup: [
            {
                name: '후원사',
                path: '/sponsors'
            },
            {
                name: '개인 후원',
                path: '/patron'
            },
            {
                name: '후원사 모집',
                path: '/support'
            },
            {
                name: '후원사로 참여하기',
                path: '/supportjoin'
            },
            {
                name: '후원사의 가치',
                path: '/supportvalue'
            },
            {
                name: '후원사 혜택 안내',
                path: '/supportbenefits'
            }
        ]
    },
    {
        name: '행동 강령',
        path: '/coc',
        routeType: 'single'
    }
];

export const SpeechToTextUrl = [
    {
        date: '10월 2일 토요일',
        track: 101,
        urlInfo: [
            {
                time: '10:00~12:00',
                videoUrl: 'https://bit.ly/3mdLvJ8'
            },
            {
                time: '12:00~',
                videoUrl: 'https://bit.ly/3mgGVtr'
            }
        ]
    },
    {
        date: '10월 2일 토요일',
        track: 102,
        urlInfo: [
            {
                time: '10:00~12:00',
                videoUrl: 'https://bit.ly/3F8UgN9'
            },
            {
                time: '12:00~',
                videoUrl: 'https://bit.ly/3uH0XS1'
            }
        ]
    },
    {
        date: '10월 3일 일요일',
        track: 103,
        urlInfo: [
            {
                time: '10:00~12:00',
                videoUrl: 'https://bit.ly/3F6RyYC'
            },
            {
                time: '12:00~',
                videoUrl: 'https://bit.ly/3B4vBa8'
            }
        ]
    },
    {
        date: '10월 3일 일요일',
        track: 104,
        urlInfo: [
            {
                time: '10:00~12:00',
                videoUrl: 'https://bit.ly/3uvvSjK'
            },
            {
                time: '12:00~',
                videoUrl: 'https://bit.ly/3Fai0As'
            }
        ]
    }
];
