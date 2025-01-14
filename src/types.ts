export interface Post {
    id: number;
    category: string;
    title: string;
    content: string;
    images?: string[];
}

export interface CalendarEvent {
    id: string;
    startDate: Date;
    endDate: Date;
    title: string;
    link?: string;
    colorIndex: number;
} 