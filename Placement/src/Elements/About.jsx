import React from 'react'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
export default function About() {
    return (
        <div className='pt-8 w-full'>

            <div className='flex justify-around mb-14'>
            <img src={about1} className='h-64'/>
            <p className='w-96 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolores aliquam nesciunt? Adipisci cumque repellendus quia quo minus, sequi vitae ut possimus culpa incidunt ex, dignissimos laudantium fuga distinctio ipsum!</p>
            </div>
            <div className='flex justify-around mb-14'>
            <p className='w-96'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolores aliquam nesciunt? Adipisci cumque repellendus quia quo minus, sequi vitae ut possimus culpa incidunt ex, dignissimos laudantium fuga distinctio ipsum!</p>
            
            <img src={about2} className='h-64'/>
            </div>
            <div className='flex justify-around mb-14'>
            <img src={about3} className='h-64'/>
            <p className='w-96'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates dolores aliquam nesciunt? Adipisci cumque repellendus quia quo minus, sequi vitae ut possimus culpa incidunt ex, dignissimos laudantium fuga distinctio ipsum!</p>
            </div>
        </div>
    );
}