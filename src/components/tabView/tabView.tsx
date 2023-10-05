import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './tabView.css'


type tabViewProps = {
    tabs: string[]
    tabsComponents: JSX.Element[]
}

const TabView = ({tabs, tabsComponents}: tabViewProps) => {
    const [selected, setSelected] = React.useState(0)
    return (
        <div>
            <div className='tabViewContainer'>
                <div className='tabViewWrap'>
                    <Logo />
                    <div className='tabViewTabs'>
                        {tabs.map((tab, index) => {
                            return (
                                <div 
                                    onClick={() => setSelected(index)}
                                    className={`${selected === index && 'tabViewTabSelected'} tabViewTab`}
                                >{tab}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {tabsComponents.map((tabComponent, index) => {
                return selected === index && tabComponent
            })}
        </div>
    )
}

export default TabView