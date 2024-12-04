import React from 'react'
import Choose from './Choose';
import profile from './images/Profile.png'
import { useState } from 'react';



 

export default function Dataa() {
    const [skills, setSkills] = useState([{id:Date.now,skill:""}])
    const addSkills =() => {
      setSkills((prev) => [...prev,{id:Date.now(), skill:""}])
    }
  
    const updatedSkills =(id,skills) => {
      setSkills((prev) => prev.map((prevSkills) => (prevSkills.id === id ? skills : prevSkills)))
    }
  
    const deleteSkills =(id) => {
      setSkills((prev) => prev.filter((skills) => skills.id !== id))
    }
    
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
                <div>
                <p className='mb-1'>10th(%)</p>

                <input type="number" placeholder='10th' className='pl-2 mb-3'/>
                </div>

                <div>
                <p className='mb-1'>12th(%)</p>
                <input type="number" placeholder='12th' className='pl-2 mb-3'/>
                </div>

                <div>
                <p className='mb-1'>Graduation(%)</p>
                <input type="number" placeholder='Graduation' className='pl-2 mb-3'/>
                </div>

            </div>
            <div >

                <div class="ele2Main12"  id="skills">
                <h1 className='text-2xl underline mb-4'>Skills</h1>
                {skills.map((skill) => (<>
                <div className='flex justify-between align-middle'>
                    <input 
                        key={skill.id}
                        type="text"
                        className='pl-2 mb-3 mr-1'
                        placeholder='Skill'
                        
                        onChange={(e) => updatedSkills(e.target.id,e.target.value)}
                        
                    />
                    <button
                className={`inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center  "bg-white" hover:bg-gray-100`
             } onClick={() => deleteSkills(skill.id)}
            >
                ❌
            </button>
            </div>
            </>
                ))}

                    <button className='h-8 w-20 underline' onClick={addSkills} >Add</button>
                
                </div> 
                
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