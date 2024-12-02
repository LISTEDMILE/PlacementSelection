import React from 'react'
import Choose from './ChooseO';
import profile from './images/Profile.png'



 

export default function DataaO() {

    
    return (

        <div class="ele2Main">
            <Choose/>
            <div id="outerofDataa">
           
            <div class="ele2Main12" >
                <img src={profile} className='h-36 mb-3'/>
                <input placeholder='NAME' className='pl-2 mb-3'/>
                <input type="number" placeholder='ROLL. NO.' className='pl-2 mb-3'/>
                <input placeholder='Gender' className='pl-2 mb-3'/>
                <input placeholder='Course' className='pl-2 mb-3'/>
                <input placeholder='Date of Birth' className='pl-2 mb-3'/>
                <input type="email" placeholder='Email' className='pl-2 mb-3'/>
                <input placeholder='Address' className='pl-2 mb-3'/>

            </div>
            <div class="ele2Main12">
                <h1 className='text-2xl underline mb-4'>Scores</h1>
                
                <input type="number" placeholder='10th' className='pl-2 mb-3'/>
                <input type="number" placeholder='12th' className='pl-2 mb-3'/>
                <input type="number" placeholder='Graduation' className='pl-2 mb-3'/>
            </div>
            <div class="ele2Main12">
                
                <h1 className='text-2xl underline mb-4'>Skills</h1>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <button className='h-8 w-20 underline'>Add</button>
                
                
            </div>
            <div class="ele2Main12">
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <button className='h-8 w-20 underline'>Add</button>
            </div>


            <div class="ele2Main12">
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <input placeholder='Certifications' className='pl-2 mb-3'/>
            <input type="file" className='pl-2 mb-3'/>
            <button className='h-8 w-20 underline'>Add</button>
            </div>

            <div class="ele2Main12">
                <h1 className='text-2xl underline mb-4'>Scores</h1>
                
                <input type="number" placeholder='10th' className='pl-2 mb-3'/>
                <input type="number" placeholder='12th' className='pl-2 mb-3'/>
                <input type="number" placeholder='Graduation' className='pl-2 mb-3'/>
            </div>
            <div class="ele2Main12">
                
                <h1 className='text-2xl underline mb-4'>Skills</h1>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <button className='h-8 w-20 underline'>Add</button>
                
                
            </div>
            <div class="ele2Main12">
                
                <h1 className='text-2xl underline mb-4'>Skills</h1>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <input placeholder='Skills' className='pl-2 mb-3'/>
                <button className='h-8 w-20 underline'>Add</button>
                
                
            </div>
            
                
                <div class="ele2Main12">
            <div className='flex-col justify-center align-middle'>
                <h1 className='mb-4'>Key Roles and Responsibilities</h1>
            <textarea className='w-9/12 min-h-10 min-w-96 block'></textarea>
          
           
           </div>
</div>

<div class="ele2Main12">
            <div className='flex-col justify-center align-middle'>
                <h1 className='mb-4'>What Role</h1>
            <textarea className='w-9/12 min-h-10 min-w-96 block'></textarea>
          
           
           </div>
</div>
            </div>
            </div>
    );
}