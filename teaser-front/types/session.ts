export interface Session {
    title: string;
    brief: string;
    desc: string;
    user_name: string;
    comment: string;
    difficulty: string;
    duration: string;
    language: string;
    introduction?: string;
    video_url?: string;
    slide_url?: string;
    video_open_at: string;
    id: number;
    category_data: {
        id: number;
        name: string;
    };
}

export interface Category {
    category_id: number;
    category_name: string;
    category_items: Session[];
}
