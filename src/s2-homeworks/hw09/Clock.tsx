import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    // const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const [disabledStart, setDisabledStart]=useState<boolean>(false)
    const [disabledStop, setDisabledStop]=useState<boolean>(true)

    const start = () => {
        let id = setInterval(() => setDate(new Date(restoreState('hw9-date', Date.now()))), 1000)
        setTimerId(Number(id))
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        setDisabledStart(true)
        setDisabledStop(false)
    }

    const stop = () => {
        setTimeout(() => {
            clearInterval(timerId)
        });
        setDisabledStart(false)
        setDisabledStop(true)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    let formatter = new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    });

    const stringTime = formatter.format(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты


    formatter = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    const [{ value: month }, , { value: day }, , { value: year }] = formatter.formatToParts(date);
    const formattedDate = `${month}.${day}.${year}`;
    const stringDate = formattedDate || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    formatter = new Intl.DateTimeFormat("en", {
        weekday: "long",
    });
    const stringDay = formatter.format(date) || <br/> // пишут студенты


    formatter = new Intl.DateTimeFormat("en", {
        month: "long"
    });
    const stringMonth = formatter.format(date) || <br/> // пишут студенты


    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabledStart} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={disabledStop} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
