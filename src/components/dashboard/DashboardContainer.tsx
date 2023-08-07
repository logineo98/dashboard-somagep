import React from 'react'
import { numberElements } from '../../utils/dashboard'
import Statistic from './Statistic'
import NumberElement from './NumberElement'


const DashboardContainer = () => {

    return (
        <div className='dashboard'>
            <div className='number_element'>
                {numberElements.map((el, i) => <NumberElement key={i} title={el.title} icon={el.icon} name={el.name} link={el.link} />)}
            </div>

            <p className='info'>Statistiques des paiements</p>
            <Statistic />
        </div>
    )
}

export default DashboardContainer