import { useState } from 'react';
import { CalendarEvent } from '../types';
import './Calendar.css';

interface CalendarProps {
    events: CalendarEvent[];
}

const Calendar = ({ events }: CalendarProps) => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [currentDate, setCurrentDate] = useState(new Date());

    const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = parseInt(event.target.value);
        setSelectedYear(newYear);
        setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
    };

    const changeMonth = (increment: number) => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + increment)));
    };

    // 현재 월이 1월이나 12월인지 확인
    const isFirstMonth = currentDate.getMonth() === 0;
    const isLastMonth = currentDate.getMonth() === 11;

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

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <div className="calendar-controls">
                    <select 
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="year-select"
                    >
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}년
                            </option>
                        ))}
                    </select>
                    <h2>{currentDate.getMonth() + 1}월</h2>
                    <div className="month-controls">
                        {!isFirstMonth && (
                            <button 
                                onClick={() => changeMonth(-1)} 
                                className="calendar-arrow left"
                            >
                                &#8249;
                            </button>
                        )}
                        {!isLastMonth && (
                            <button 
                                onClick={() => changeMonth(1)} 
                                className="calendar-arrow right"
                            >
                                &#8250;
                            </button>
                        )}
                    </div>
                </div>
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
