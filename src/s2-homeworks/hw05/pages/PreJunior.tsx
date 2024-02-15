import React from 'react'
import s from '../../../s1-main/App.module.css'
import HW1 from '../../hw01/HW1'
import HW2 from '../../hw02/HW2'
import HW3 from '../../hw03/HW3'
import HW4 from '../../hw04/HW4'

function PreJunior() {
    return (
        <div id={'hw5-page-pre-junior'}>
            {/*pre junior page*/}
            <div className={s.App}>
                <HW1 />
                <HW2 />
                <HW3 />
                <HW4 />
            </div>
        </div>
    )
}

export default PreJunior
