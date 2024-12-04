import React from 'react'
import about1 from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'
export default function About() {
    return (
        <div className='pt-8 w-full'>

            <div className='flex justify-around mb-14'>
            <img src={about1} className='h-64'/>
            <p className='w-96 '>Hire Sphere is a dynamic, user-friendly platform designed to bridge the gap between employers and potential candidates. We strive to simplify the recruitment process by offering a seamless experience for both job seekers and hiring companies. Whether you're a fresh graduate looking for your first job or an experienced professional exploring new career opportunities, Hire Sphere provides you with all the tools and resources you need to make your hiring journey a success.
            </p>
            </div>
            <div className='flex justify-around mb-14'>
            <p className='w-96'>At Hire Sphere, we prioritize quality and relevance. Our platform uses cutting-edge technology to match job seekers with employers based on skills, experience, and preferences. We offer a range of services, including customized job listings, resume optimization tools, and interview scheduling, all aimed at helping candidates land their dream job and employers find the perfect fit for their open positions.
            </p>
            
            <img src={about2} className='h-64'/>
            </div>
            <div className='flex justify-around mb-14'>
            <img src={about3} className='h-64'/>
            <p className='w-96'>Our Mission:<br/>
To create a trusted, efficient, and comprehensive platform for recruitment that connects top talent with the best companies in the industry.
<br/><br/>Our Vision:<br/>
To empower job seekers and employers to make smarter, more informed decisions during the hiring process.
</p>
            </div>
        </div>
    );
}