import { useState } from 'react';
import { CalendarEvent } from '../types';
import './Calendar.css';

interface CalendarProps {
    events: CalendarEvent[];
}

const Calendar = ({ events }: CalendarProps) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];

        // 이전 달의 날짜들을 채움
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // 현재 달의 날짜들을 채움
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const dayEvents = events.filter(event => {
                return currentDayDate >= new Date(event.startDate) && 
                       currentDayDate <= new Date(event.endDate);
            });

            days.push(
                <div key={day} className="calendar-day">
                    <div className="day-number">{day}</div>
                    <div className="day-events">
                        {dayEvents.map(event => (
                            <div key={event.id} 
                                 className="event-bar"
                                 style={{
                                     width: '100%',
                                 }}>
                                {event.link ? (
                                    <a href={event.link} className="event-link">
                                        {event.title}
                                    </a>
                                ) : (
                                    <span>{event.title}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return days;
    };

    const changeMonth = (increment: number) => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + increment)));
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}>&lt;</button>
                <h2>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</h2>
                <button onClick={() => changeMonth(1)}>&gt;</button>
            </div>
            <div className="calendar-grid">
                <div className="weekday">일</div>
                <div className="weekday">월</div>
                <div className="weekday">화</div>
                <div className="weekday">수</div>
                <div className="weekday">목</div>
                <div className="weekday">금</div>
                <div className="weekday">토</div>
                {generateCalendarDays()}
            </div>
        </div>
    );
};

export default Calendar;
