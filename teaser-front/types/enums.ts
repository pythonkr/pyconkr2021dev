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
