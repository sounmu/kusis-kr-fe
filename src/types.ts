export interface Post {
    id: number;
    post_number: number;
    category: string;
    title: string;
    content: string;
    images?: string[];
    created_at: string;
    updated_at: string;
}

export interface CalendarEvent {
    id: string;
    startDate: Date;
    endDate: Date;
    title: string;
    link?: string;
    colorIndex: number;
} 