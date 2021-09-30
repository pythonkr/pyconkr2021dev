export interface Session {
    title: string;
    brief: string;
    desc: string;
    user_name: string;
    comment: string;
    difficulty: string;
    duration: string;
    language: string;
    category: string;
    introduction?: string;
    video_url?: string;
    slide_url?: string;
    video_open_at: string;
    id: number;
}
