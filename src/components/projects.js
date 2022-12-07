import React from 'react'
import useWindowSize from '../utils/winResize'
const Projects = () =>{
    const data = [
        {
            displayName: 'Music Player',
            text: 'I developed a music player using NodeJS with the ability to create lists and shuffle tracks. This project allowed me to gain experience with NodeJS and added to my skills in developing useful applications. The music player proved to be a valuable tool for my own personal use and for others.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/music-player'
                }                
            ],
        },
        {
            displayName: 'JSON into CSV converter',
            text: 'I developed a JSON to CSV converter tool using NodeJS. This tool proved to be a valuable addition to my skill set and allowed me to efficiently convert JSON files into CSV format, saving time and effort.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/csv-to-json'
                },
                {
                    
                }
            ],
        },
        {
            displayName: 'Email Automation Tool',
            text: 'I wrote and deployed an email automation tool using Python. This tool allowed me to send multiple emails with the sender email changing automatically for each email. This proved to be a valuable tool for streamlining my email communication and saved a significant amount of time.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/email-automation'
                },
                {
                   
                }
            ],
        },
        {
            displayName: 'Solar Powered Fertilizer Applicator',
            text: 'In my major and minor projects, I built a solar powered fertilizer applicator and completed all design and analysis using Solidworks and Ansys. I also invented a new mechanism for the deployment of fertilizer, which proved successful in testing and implementation.',
            link:[
                {
                    name: 'Report',
                    href: 'https://jmistudent-my.sharepoint.com/:b:/g/personal/shiraz185417_st_jmi_ac_in/EfJD1Fh4jkBBhjZ_Cj3Le9sBS6ZmblHK7ehpVBQsAAHhpg?e=YLnFLl'
                },
                {
                    name: 'PPT',
                    href: 'https://jmistudent-my.sharepoint.com/:p:/g/personal/shiraz185417_st_jmi_ac_in/EQtDdlqIDUFAiqeUBbKCB9QB9GwkQdqQr0flzomxT8KgTA?e=KraKLk&nav=eyJzSWQiOjI1Nn0'
                }
            ],
        },
        {
            displayName: 'Formula Student 2021 ',
            text: 'I joined an international competition, Formula Bharat, and served as the team manager and power train head. In this role, I was responsible for designing the power train of the competition vehicle, which proved successful in testing. I also concluded two research papers on the project and its results, which were published by the end of the competition.',
            link:[
                {
                    name: 'Research Paper',
                    href: 'https://www.researchgate.net/publication/347774911_Design_and_Analysis_of_a_Drivetrain_of_an_Electric_Formula_Student_Vehicle'
                },
                {
                    name: 'live',
                    href: 'https://www.researchgate.net/publication/347774911_Design_and_Analysis_of_a_Drivetrain_of_an_Electric_Formula_Student_Vehicle'
                }
            ],
        },
        {
            displayName: 'All Terrain Vehicle, QBDC 2020',
            text: 'I joined a national level quad bike designing challenge and served as the team manager. I led my team to victory in the competition and was responsible for fabricating the parts and vehicle. I also helped with the design and analysis of the quad bike, which proved instrumental in our success.',
            link:[
                {
                   //
                }
            ],
        },
    ]
    let gridCount;    
    const [width] = useWindowSize()
    if(width>1119)
        gridCount = 3;
    else if(width>640)
        gridCount = 2;
    else
        gridCount = 1
    return(
        <div className=" bg-black  pb-36 justify-center gap-3 text-white">
            <div className="w-full text-center text-4xl pb-10 p-4">
                Things I’ve Created;
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {
                    Array(gridCount).fill(0).map((_,i)=>{
                        return (
                            <div key={i.toString()} className="flex flex-col gap-2">
                                {
                                    [...data].map((d, j)=>{
                                    return j%gridCount===i?(
                                        <div key={d.displayName} className="md:w-96 w-80 p-6 flex flex-col border relative overflow-hidden">
                                            <div className="cardContent z-10 flex flex-col gap-3  mix-blend-difference">
                                                <div className="font-bold ">{d.displayName}</div>
                                                <div>{d.text}</div>
                                                <div className="flex justify-between">
                                                    {
                                                        d.link.map((link, index)=>{
                                                            return <a key={link.name} href={link.href} target="_blank"><div className={` pl-4 pr-4 pt-1 pb-1 ${index === 0? 'text-red-400 hover:bg-white': 'text-white hover:bg-gray-800'}`}>{link.name}</div></a>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div  className="cardWrapper bg-white h-full absolute z-0"></div>
                                        </div>
                                    ):null
                                    })
                                }

                            </div>

                        )
                    })
                }
            </div>

                

        </div>
    )
}
export default Projects
