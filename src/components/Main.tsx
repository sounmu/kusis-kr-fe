import "./Main.css";
import Calendar from "./Calendar/Calendar.tsx";
import Apply from "./Apply/Apply.tsx";

const Main = () => {

    const events = [
        {
            id: '1',
            startDate: new Date(2025, 0, 2),
            endDate: new Date(2025, 0, 2),
            title: '제1학기 정의장학금(면학 및 미래로) 1차 신청',
            colorIndex: 0
        },
        {
            id: '2',
            startDate: new Date(2025, 0, 17),
            endDate: new Date(2025, 0, 17),
            title: '겨울계절수업 종강',
            colorIndex: 1
        },
        {
            id: '3',
            startDate: new Date(2025, 1, 3),
            endDate: new Date(2025, 1, 3),
            title: '휴·복학 신청',
            colorIndex: 2
        },
        {
            id: '4',
            startDate: new Date(2025, 1, 4),
            endDate: new Date(2025, 1, 4),
            title: '2025학년도 제1학기 수강희망과목 등록(재입학생 포함)',
            colorIndex: 3
        },
        {
            id: '5',
            startDate: new Date(2025, 1, 11),
            endDate: new Date(2025, 1, 11),
            title: '2025학년도 제1학기 수강신청(재입학생 포함)',
            colorIndex: 4
        },
        {
            id: '6',
            startDate: new Date(2025, 1, 20),
            endDate: new Date(2025, 1, 20),
            title: '2025학년도 제1학기 등록',
            colorIndex: 5
        },
        {
            id: '7',
            startDate: new Date(2025, 1, 25),
            endDate: new Date(2025, 1, 25),
            title: '2025학년도 제1학기 신입·편입생(외국인전형) 및 학사학위 취득 유예생 수강신청',
            colorIndex: 6
        },
        {
            id: '8',
            startDate: new Date(2025, 1, 25),
            endDate: new Date(2025, 1, 25),
            title: '2024학년도 전기 학위수여식',
            colorIndex: 7
        },
        {
            id: '9',
            startDate: new Date(2025, 1, 28),
            endDate: new Date(2025, 1, 28),
            title: '2025학년도 입학식',
            colorIndex: 8
        },
        {
            id: '10',
            startDate: new Date(2025, 2, 4),
            endDate: new Date(2025, 2, 4),
            title: '2025학년도 제1학기 개강',
            colorIndex: 9
        },
        {
            id: '11',
            startDate: new Date(2025, 2, 4),
            endDate: new Date(2025, 2, 4),
            title: '조기졸업 신청',
            colorIndex: 0
        },
        {
            id: '12',
            startDate: new Date(2025, 2, 5),
            endDate: new Date(2025, 2, 5),
            title: '수강신청 정정 및 확인',
            colorIndex: 1
        },
        {
            id: '13',
            startDate: new Date(2025, 2, 25),
            endDate: new Date(2025, 2, 25),
            title: '수강포기 신청',
            colorIndex: 2
        },
        {
            id: '14',
            startDate: new Date(2025, 2, 26),
            endDate: new Date(2025, 2, 26),
            title: '복수전공 신청',
            colorIndex: 3
        },
        {
            id: '15',
            startDate: new Date(2025, 2, 31),
            endDate: new Date(2025, 2, 31),
            title: '제1학기 1/4 시점(4주차)',
            colorIndex: 4
        },
        {
            id: '16',
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2025, 3, 1),
            title: '제1학기 미래로장학금 2차 신청',
            colorIndex: 5
        },
        {
            id: '17',
            startDate: new Date(2025, 3, 1),
            endDate: new Date(2025, 3, 1),
            title: '학생설계전공 신청',
            colorIndex: 6
        },
        {
            id: '18',
            startDate: new Date(2025, 3, 16),
            endDate: new Date(2025, 3, 16),
            title: '융합전공 신청',
            colorIndex: 7
        },
        {
            id: '19',
            startDate: new Date(2025, 3, 22),
            endDate: new Date(2025, 3, 22),
            title: '제1학기 중간고사',
            colorIndex: 8
        },
        {
            id: '20',
            startDate: new Date(2025, 3, 28),
            endDate: new Date(2025, 3, 28),
            title: '제1학기 1/2 시점(8주차)',
            colorIndex: 9
        },
        {
            id: '21',
            startDate: new Date(2025, 4, 14),
            endDate: new Date(2025, 4, 14),
            title: '이중전공 신청',
            colorIndex: 0
        },
        {
            id: '22',
            startDate: new Date(2025, 4, 26),
            endDate: new Date(2025, 4, 26),
            title: '제1학기 3/4 시점(12주차)',
            colorIndex: 1
        },
        {
            id: '23',
            startDate: new Date(2025, 5, 2),
            endDate: new Date(2025, 5, 2),
            title: '재입학 신청',
            colorIndex: 2
        },
        {
            id: '24',
            startDate: new Date(2025, 5, 17),
            endDate: new Date(2025, 5, 17),
            title: '제1학기 기말고사',
            colorIndex: 3
        },
        {
            id: '25',
            startDate: new Date(2025, 5, 23),
            endDate: new Date(2025, 5, 23),
            title: '제1학기 종강(16주차)',
            colorIndex: 4
        },
        {
            id: '26',
            startDate: new Date(2025, 5, 24),
            endDate: new Date(2025, 5, 24),
            title: '여름방학 시작, 여름계절수업 개강',
            colorIndex: 5
        },
        {
            id: '27',
            startDate: new Date(2025, 6, 1),
            endDate: new Date(2025, 6, 1),
            title: '제2학기 미래로장학금 1차 신청',
            colorIndex: 6
        },
        {
            id: '28',
            startDate: new Date(2025, 6, 21),
            endDate: new Date(2025, 6, 21),
            title: '여름계절수업 종강',
            colorIndex: 7
        },
        {
            id: '29',
            startDate: new Date(2025, 7, 1),
            endDate: new Date(2025, 7, 1),
            title: '휴·복학 신청',
            colorIndex: 8
        },
        {
            id: '30',
            startDate: new Date(2025, 7, 4),
            endDate: new Date(2025, 7, 4),
            title: '2025학년도 제2학기 수강희망과목 등록(재입학생 포함)',
            colorIndex: 9
        },
        {
            id: '31',
            startDate: new Date(2025, 7, 11),
            endDate: new Date(2025, 7, 11),
            title: '2025학년도 제2학기 수강신청(재입학생 포함)',
            colorIndex: 0
        },
        {
            id: '32',
            startDate: new Date(2025, 7, 21),
            endDate: new Date(2025, 7, 21),
            title: '2025학년도 제2학기 신입·편입생(외국인전형 포함) 및 학사학위 취득유예생 수강신청',
            colorIndex: 1
        },
        {
            id: '33',
            startDate: new Date(2025, 7, 21),
            endDate: new Date(2025, 7, 21),
            title: '2025학년도 제2학기 등록',
            colorIndex: 2
        },
        {
            id: '34',
            startDate: new Date(2025, 8, 1),
            endDate: new Date(2025, 8, 1),
            title: '조기졸업 신청',
            colorIndex: 3
        },
        {
            id: '35',
            startDate: new Date(2025, 8, 1),
            endDate: new Date(2025, 8, 1),
            title: '2025학년도 제2학기 개강',
            colorIndex: 4
        },
        {
            id: '36',
            startDate: new Date(2025, 8, 3),
            endDate: new Date(2025, 8, 3),
            title: '수강신청 정정 및 확인',
            colorIndex: 5
        },
        {
            id: '37',
            startDate: new Date(2025, 8, 22),
            endDate: new Date(2025, 8, 22),
            title: '수강포기 신청',
            colorIndex: 6
        },
        {
            id: '38',
            startDate: new Date(2025, 8, 24),
            endDate: new Date(2025, 8, 24),
            title: '복수전공 신청',
            colorIndex: 7
        },
        {
            id: '39',
            startDate: new Date(2025, 8, 26),
            endDate: new Date(2025, 8, 26),
            title: '제2학기 1/4 시점(4주차)',
            colorIndex: 8
        },
        {
            id: '40',
            startDate: new Date(2025, 8, 26),
            endDate: new Date(2025, 8, 26),
            title: '정기 고·연전',
            colorIndex: 9
        },
        {
            id: '41',
            startDate: new Date(2025, 9, 1),
            endDate: new Date(2025, 9, 1),
            title: '학생설계전공 신청',
            colorIndex: 0
        },
        {
            id: '42',
            startDate: new Date(2025, 9, 2),
            endDate: new Date(2025, 9, 2),
            title: '제2학기 미래로장학금 2차 신청',
            colorIndex: 1
        },
        {
            id: '43',
            startDate: new Date(2025, 9, 15),
            endDate: new Date(2025, 9, 15),
            title: '융합전공 신청',
            colorIndex: 2
        },
        {
            id: '44',
            startDate: new Date(2025, 9, 20),
            endDate: new Date(2025, 9, 20),
            title: '제2학기 중간고사',
            colorIndex: 3
        },
        {
            id: '45',
            startDate: new Date(2025, 9, 24),
            endDate: new Date(2025, 9, 24),
            title: '제2학기 1/2 시점(8주차)',
            colorIndex: 4
        },
        {
            id: '46',
            startDate: new Date(2025, 10, 3),
            endDate: new Date(2025, 10, 3),
            title: '캠퍼스 내 소속변경(전과) 신청',
            colorIndex: 5
        },
        {
            id: '47',
            startDate: new Date(2025, 10, 12),
            endDate: new Date(2025, 10, 12),
            title: '이중전공 신청',
            colorIndex: 6
        },
        {
            id: '48',
            startDate: new Date(2025, 10, 21),
            endDate: new Date(2025, 10, 21),
            title: '제2학기 3/4 시점(12주차)',
            colorIndex: 7
        },
        {
            id: '49',
            startDate: new Date(2025, 11, 3),
            endDate: new Date(2025, 11, 3),
            title: '재입학신청',
            colorIndex: 8
        },
        {
            id: '50',
            startDate: new Date(2025, 11, 15),
            endDate: new Date(2025, 11, 15),
            title: '제2학기 기말고사',
            colorIndex: 9
        },
        {
            id: '51',
            startDate: new Date(2025, 11, 19),
            endDate: new Date(2025, 11, 19),
            title: '제2학기 종강(16주차)',
            colorIndex: 0
        },
        {
            id: '52',
            startDate: new Date(2025, 11, 22),
            endDate: new Date(2025, 11, 22),
            title: '겨울방학 시작, 겨울계절수업 개강',
            colorIndex: 1
        },
        {
            id: '53',
            startDate: new Date(2026, 7, 23),
            endDate: new Date(2026, 7, 23),
            title: '강문수 전역',
            colorIndex: 2
        }
    ];

    return (
        <div className="main-content-background">
            <div className="main-content">
                <Apply />
                <Calendar events={events} />
            </div>
        </div>
    );
};

export default Main;