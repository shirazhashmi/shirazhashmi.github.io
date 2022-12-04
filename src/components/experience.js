import React, { useState, useRef } from 'react'
const Experience  = () =>{
    const experienceColRef = useRef(null)
    const experience = [
        {
            displayName:"MixBitx Technologies",
            data:
                {
                    header: 'Product Manager and Team Lead',
                    subHeader: 'Currently',
                    li:'Worked as a web designer and product manager at MixBitx. <br>Collaborated directly with clients to understand their needs and develop effective solutions. <br> Utilized a variety of design and development tools, including Figma, Wix, HTML, CSS, and JavaScript. <br> Managed the product development process from concept to launch, ensuring that projects were delivered on time and to the clients satisfaction. <br> Demonstrated strong communication, collaboration, and problem-solving skills.<br> Contributed to the success of the company by delivering high-quality web designs and product management services.'
                    // text: 'working as a full-stack and  UI UX desingner. mainly working on websocket, payment gateway and prototyping Ui components on figma',
                }
            
        },
        {
            displayName: 'Kaksha.live',
            data:
                {
                    header: 'Product Manager',
                    subHeader: 'Sep 2021 - Sep 2022',
                    text: '',
                    li:'Worked in a startup, creating product prototype and developing the initial idea <br>Built and led various teams to bring the product to market. <br>Successfully launched the product and achieved strong initial traction <br>Demonstrated strong leadership, problem-solving, and project management skills. <br> Contributed to the growth and success of the startup, helping it to secure funding and partnerships. <br> Developed deep knowledge of the market and industry, using this knowledge to drive product development and strategy.'

                }
            
        },
        {
            displayName: 'Zalphius',
            data: 
                {
                    header: 'Design Intern',
                    subHeader: 'Sep 2020 - Dec 2020',
                    li: 'Developed collateral such as display, marketing and packaging materials to support product branding strategies cases. <br> Designed, coordinated, created and scheduled content and periodic updates to company website.'
                }
        }
    ]
    const [selected, setSelected] = useState(0)
    return(
        <div className="flex bg-black pt-36 pb-36 justify-center overflow-hidden ">
            <div className="text-white w-full gap-5 flex flex-col mix-blend-difference">
                <div className="text-4xl text-center">
                    The journey;
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 flex-1"  style={{transition:'all 0.3s ease-out'}}>
                    <div className="gap-3 md:overflow-x-hidden overflow-x-scroll w-full md:w-auto md:flex-col flex-row justify-center md:justify-start flex p-8 border-r">
                        {
                            experience.map((e,index)=>{
                                let dir1, dir2
                                if(window.aniamteDir === undefined)
                                    window.aniamteDir = index
                                if(window.aniamteDir > index){
                                    dir1='md:animate__slideInDown' 
                                    dir2='animate__slideInLeft'
                                }
                                else{
                                    dir1='md:animate__slideInUp'
                                    dir2= 'animate__slideInRight'
                                }
                                return (
                                    <div key={e.displayName} 
                                        onClick={()=> {
                                            window.aniamteDir = index;
                                            // experienceColRef.current.classList.add(dir==='animate-top'?'slideOutDown':'slideOutUp');
                                            experienceColRef.current.classList.add(dir1);setSelected(index);
                                            experienceColRef.current.classList.add(dir2);setSelected(index);

                                            setTimeout(_=>{},200)

                                            setTimeout(_=>{experienceColRef.current.classList.remove(dir1);experienceColRef.current.classList.remove(dir2)},300)
                                        }} 
                                        className={`border-l-4 mix-blend-difference ${index===selected?'border-red-400 text-red-200':'border-white text-white'} cursor-pointer md:text-xl  font-bold p-2 pl-5`}>
                                        {e.displayName}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div ref={experienceColRef} className={` flex flex-col w-96  items-center md:items-start `}  style={{animationDuration: '150ms'}}>
                        <div className="text-xl font-bold" style={{wordSpacing:'6px'}}>
                            {experience[selected].data.header} @ <span className="text-red-200 mix-blend-difference letterSpacing-2">{experience[selected].displayName}</span>
                        </div>
                        {
                            experience[selected].data.subHeader?
                            <div className="font-thin letterSpacing-2">
                                {experience[selected].data.subHeader}
                            </div>:null

                        }
                        <div className='pt-3'>
                            {
                                experience[selected].data.li?
                                    <div className="p-8 md:p-0 pt-3 flex flex-col gap-2">
                                        {
                                            experience[selected].data.li?.split("<br>").map(x=>{
                                                return(
                                                    <div key={x} className="flex">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff9e9e"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                                                        </div>
                                                        <div>
                                                            {x}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                :null

                            }
                        </div>
                        
                        <div className="pt-3 flex flex-col gap-2">
                            {experience[selected].data.text}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;
