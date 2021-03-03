/**
 * 시간표
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../common/Layout';
import PageHeader from '../common/PageHeader';
import { ScheduleComponent, ViewsDirective, ViewDirective, WorkWeek, Inject } from '@syncfusion/ej2-react-schedule';
import './Timetable.css'

function Timetable() {

    /*
        fix : 시간표 조회
    */
    const rawTimetableData = [
        {
            "day": "화요일 TUESDAY",
            "data": [
                {
                    "subject": "컴퓨터구조 / IT대학-602 /  이상순",
                    "time": "1600 ~ 1715"
                },
                {
                    "subject": "종합프로젝트 / IT대학-502 /  임준식",
                    "time": "1825 ~ 1915"
                },
                {
                    "subject": "종합프로젝트 / IT대학-502 /  임준식",
                    "time": "1920 ~ 2010"
                }
            ]
        }
    ];

    const data11 = rawTimetableData.map((item) => {
        // console.log(item.day[0])

        item.data.map((item2, i) => {
            console.log("i : " + i)
            console.log(item.day[0])
            console.log("subject : " + item2.subject)
            const startH = item2.time.substring(0,2)
            const startM = item2.time.substring(2,4)
            const endH = item2.time.substring(7,9)
            const endM = item2.time.substring(9,)
            console.log(startH+":"+startM+"~"+endH+":"+endM)

            // let date = '';
            // switch (item.day[0]) {
            //     case '월': date = new Date(2021, 1, 1, 11, 0); break;
            //     case '화': date = '화'; break;
            //     case '수': date = '수'; break;
            //     case '목': date = '목'; break;
            //     case '금': date = '금'; break;
            //     default: date = new Date(2021, 1, 1, 9, 0); break;
            // }

            return 1;
        });

        return 1;
    });

    // console.log("data11: " + data11);

    const timetableData = [{
        Id: 1,
        Subject: '창업과 기업가정신 / 비전타워-B201 /  최창명',
        StartTime: new Date(2021, 1, 1, 11, 0),
        EndTime: new Date(2021, 1, 1, 12, 50)
    }, {
        Id: 2,
        Subject: '컴퓨터구조 / IT대학-602 /  이상순',
        StartTime: new Date(2021, 1, 1, 14, 30),
        EndTime: new Date(2021, 1, 1, 15, 45)
    }, {
        Id: 3,
        Subject: '종합프로젝트 / IT대학-502 /  임준식',
        StartTime: new Date(2021, 1, 1, 18, 25),
        EndTime: new Date(2021, 1, 1, 21, 5)
    }, {
        Id: 2,
        Subject: '컴퓨터구조 / IT대학-602 /  이상순',
        StartTime: new Date(2021, 1, 2, 16, 0),
        EndTime: new Date(2021, 1, 2, 17, 15)
    }, {
        Id: 3,
        Subject: '종합프로젝트 / IT대학-502 /  임준식',
        StartTime: new Date(2021, 1, 2, 18, 25),
        EndTime: new Date(2021, 1, 2, 20, 10)
    }, {
        Id: 4,
        Subject: '대기업·중견기업 취업 준비전략 / 가천관-B101 /  조진수',
        StartTime: new Date(2021, 1, 3, 13, 0),
        EndTime: new Date(2021, 1, 3, 14, 50)
    }];

    // 요일 헤더
    const timetableDayHeader = (props) => {
        let day = '';
        switch (props.date.getDay()) {
            case 1: day = '월'; break;
            case 2: day = '화'; break;
            case 3: day = '수'; break;
            case 4: day = '목'; break;
            case 5: day = '금'; break;
            default: day = ''; break;
        }
        return ( <div className="timetable-day">{day}</div> );
    }

    // 스타일
    const onEventRendered = (args) => {
        // console.log(args);
        let subjectColor;
        switch (args.data.Id) {
            case 1: subjectColor = '#f08676'; break;
            case 2: subjectColor = '#ecc369'; break;
            case 3: subjectColor = '#a7c970'; break;
            case 4: subjectColor = '#7cd1c1'; break;
            case 5: subjectColor = '#7aa5ea'; break;
            case 6: subjectColor = '#fdaa67'; break;
            case 7: subjectColor = '#9e86e1'; break;
            case 8: subjectColor = '#77ca88'; break;
            case 9: subjectColor = '#d497ee'; break;
            default: subjectColor = '#000000'; break;
        }
        args.element.style.width = '98%';
        args.element.style.left = '1%';
        args.element.style.border = 'none';
        args.element.style.backgroundColor = subjectColor;
    }

    return (
        <Layout header footer>
            {/* back button, pageHeader */}
            <PageHeader title="시간표" />
            
            {/* 시간표 */}
            <div className="timetable">
                <ScheduleComponent
                    selectedDate={new Date(2021, 1, 1)} // 최초 세팅 날짜 지정(어차피 요일만 쓰므로 그냥 월요일인 날짜로 고정)
                    showHeaderBar={false} // 기본 헤더 숨김
                    dateHeaderTemplate={(props) => timetableDayHeader(props)} // 헤더 요일로 커스텀
                    startHour='9:00' // 시간표 시작 시간
                    endHour='23:00' // 시간표 끝 시간
                    workHours={{ highlight: true, start: '9:00', end: '23:00' }} // 시간표 배경. 시간에 따라 흰색, 미색으로 지정 가능
                    eventSettings={{ dataSource: timetableData }} // 시간표 데이터 바인딩
                    eventRendered={(args) => onEventRendered(args)} // 스타일 수정
                >

                    <ViewsDirective>
                        <ViewDirective option='WorkWeek' readonly={true} />
                    </ViewsDirective>
                    <Inject services={[WorkWeek]} />
                </ScheduleComponent>
            </div>
        </Layout>
    );
}

export default withRouter(Timetable);