import React from 'react'
import useWindowSize from '../utils/winResize'
const Projects = () =>{
    const data = [
           {
            displayName: 'Expanding Pictures',
            text: 'As a budding web developer, I was eager to showcase my skills and creativity. So, I created a dynamic photo viewer using HTML, CSS, and JavaScript. The photo viewer expands to reveal a poem, with each verse accompanied by a unique, AI-generated image by Midjourney. This project allowed me to demonstrate my proficiency in front-end development and my ability to integrate AI technology into my work.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/Expanding-Picture'
                },
                  {
                    name: 'live',
                    href: 'https://shirazhashmi.github.io/Expanding-Picture/'
                }
            ],
        },
        {
            displayName: 'Sound Board',
            text: 'I completed a project called Sound Board, where I used JavaScript to build a web application that allows users to play and customize a variety of sound effects. I gained experience integrating the HTML5 <audio> tag with JavaScript, allowing me to control the playback of sound files and add dynamic functionality to the application. This project not only enhanced my JavaScript skills, but also introduced me to the capabilities of the <audio> tag and how it can be used to enrich web applications',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/Sound-Board-Project'
                },
                  {
                    name: 'live',
                    href: 'https://shirazhashmi.github.io/Sound-Board-Project/'
                }
            ],
        }, 
        {
            displayName: 'Split Landing Page',
            text: 'I developed a Split Landing Page project using a combination of HTML, CSS, and JavaScript. This project allowed me to showcase my skills in front-end web development and utilize my knowledge of these technologies to create a visually appealing and interactive landing page.',
             link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/Split-Landing-Page'
                },
                  {
                    name: 'live',
                    href: 'https://shirazhashmi.github.io/Split-Landing-Page/'
                }
            ],
        },
        {
            displayName: 'Rotating Navigation',
            text: 'I created a Rotating Navigation Page project using HTML, CSS, and JavaScript to build a dynamic navigation menu that rotates through a series of links when hovered over.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/Rotating-Navigation'
                },
                  {
                    name: 'live',
                    href: 'https://shirazhashmi.github.io/Rotating-Navigation/'
                }
            ],
        },
            {
        displayName: 'Dad-Jokes',
        text:'I recently completed a project called Dad Jokes, where I utilized JavaScript to build a web application that displays and generates humorous "dad jokes." In the process, I gained experience integrating APIs with JavaScript, allowing me to seamlessly retrieve and display the jokes from a third-party database. This project not only allowed me to improve my JavaScript skills, but also taught me the value of using APIs to enhance the functionality of my web applications.',
        link:[
            {
                name: 'github',
                href:  'https://github.com/shirazhashmi/Dad-Jokes'
            },
            {
                name: 'live',
                href: 'https://shirazhashmi.github.io/Dad-Jokes/' 
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
        {
            
            text: 'Scroll Animation.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/Scroll-Animation'
                },
                  {
                    name: 'live',
                    href: 'https://shirazhashmi.github.io/Scroll-Animation/'
                }
            ],
            text: 'Form Wave Animation.',
            link:[
                {
                    name: 'github',
                    href: 'https://github.com/shirazhashmi/Form-Wave-Animation'
                },
                  {
                    name: 'live',
                    href: 'https://shirazhashmi.github.io/Form-Wave-Animation/'
                }
            ],
        },
        {
        text: 'Key Codes',
        link:[
            {
                name: 'github',
                href: 'https://github.com/shirazhashmi/Key-Codes'
            },
              {
                name: 'live',
                href: 'https://shirazhashmi.github.io/Key-Codes'
            }
        ],
    },
    {
    text: 'Hidden Search Widget',
    link:[
        {
            name: 'github',
            href: 'https://github.com/shirazhashmi/Hidden-Search-Widget'
        },
          {
            name: 'live',
            href: 'https://shirazhashmi.github.io/Hidden-Search-Widget'
        }
    ],
    },
    {
    text: 'Load Blur Effect',
    link:[
    {
        name: 'github',
        href: 'https://github.com/shirazhashmi/Load-Blur_Effect'
    },
      {
        name: 'live',
        href: 'https://shirazhashmi.github.io/Load-Blur_Effect'
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
