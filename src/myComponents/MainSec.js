import React from 'react'
import {Home} from './Home'
import {About} from './About'
import {Skills} from './Skills'
import { Qualify } from './Qualify'
// import { Services } from './Services'
import { Portfolio } from './Portfolio'
// import { Project } from './Project'
import {Contact} from './Contact'


export const MainSec = () => {
    return (
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Qualify/>
            {/* <Services/> */}
            <Portfolio/>
            {/* <Project/> */}
            <Contact/>
        </main>
    )
}
