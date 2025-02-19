import { useState } from 'react';
import { CalendarEvent } from '../../types';
import './Calendar.css';

interface CalendarProps {
    events?: CalendarEvent[];
}

const Calendar = ({ events = [] }: CalendarProps) => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [currentDate, setCurrentDate] = useState(new Date());

    const years = Array.from({ length: 2 }, (_, i) => currentYear + i);

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
        const today = new Date();

        // 이전 달의 날짜들을 채움
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // 현재 달의 날짜들을 채움
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isToday = currentDayDate.toDateString() === today.toDateString();
            const dayEvents = events.filter(event => {
                return currentDayDate >= new Date(event.startDate) && 
                       currentDayDate <= new Date(event.endDate);
            });

            days.push(
                <div key={day} className="calendar-day">
                    <div className={`day-number ${isToday ? 'today' : ''}`}>{day}</div>
                    <div className="day-events">
                        {dayEvents.map(event => (
                            <div key={event.id} className={`event-bar event-color-${event.colorIndex}`}>
                                {event.link ? (
                                    <a href={event.link} className="event-link">
                                        <span className="event-text">{event.title}</span>
                                    </a>
                                ) : (
                                    <span className="event-text">{event.title}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return days;
    };

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    // 현재 달의 이벤트만 필터링하는 함수 추가
    const getCurrentMonthEvents = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        
        return events.filter(event => {
            const eventStart = new Date(event.startDate);
            const eventEnd = new Date(event.endDate);
            return (
                (eventStart <= lastDayOfMonth && eventEnd >= firstDayOfMonth)
            );
        });
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <div className="calendar-controls">
                    <div className="month-display">
                        <button 
                            onClick={() => changeMonth(-1)} 
                            className={`calendar-arrow left ${isFirstMonth ? 'disabled' : ''}`}
                            disabled={isFirstMonth}
                        >
                            &#8249;
                        </button>
                        <div className="month-display-text">{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</div>
                        <button 
                            onClick={() => changeMonth(1)} 
                            className={`calendar-arrow right ${isLastMonth ? 'disabled' : ''}`}
                            disabled={isLastMonth}
                        >
                            &#8250;
                        </button>
                    </div>
                </div>
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
            
            <div className="events-summary">
                {getCurrentMonthEvents().map(event => {
                    const startDate = new Date(event.startDate);
                    const endDate = new Date(event.endDate);
                    const isSameDay = startDate.getTime() === endDate.getTime();

                    return (
                        <div key={event.id} className="event-summary-item">
                            <span className="event-dot">•</span>
                            <span className="event-summary-title">{event.title}</span>
                            <span className="event-summary-date">
                                {isSameDay 
                                    ? formatDate(startDate)
                                    : `${formatDate(startDate)} ~ ${formatDate(endDate)}`
                                }
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
