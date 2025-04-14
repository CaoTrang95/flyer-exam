import React from 'react'
import '../styles/app.css'
import imgBack from '../assets/images/hard/bg-back.webp'
import imgBackM from '../assets/images/hard/bg-back-m.webp'
import titleImg from '../assets/images/hard/bg-title.webp'
import buttonRan from '../assets/images/hard/bg-random.webp'
import buttonRanM from '../assets/images/hard/bg-random-m.webp'
import mapBackground from '../assets/images/hard/bg-map.webp'
import checkPoint from '../assets/images/hard/bg-checkpoint.webp'
import checkPointTitle from '../assets/images/hard/bg-checkpoint-title.webp'
import checkPointDisable from '../assets/images/hard/bg-checkpoint-disabled.webp'
import lockedImg from '../assets/images/hard/bg-locked.webp'
import checkPointTitleDisable from '../assets/images/hard/bg-checkpoint-title-disabled.webp'

import './easy.css'
import { useNavigate } from 'react-router-dom'

function Hard() {
    const navigative = useNavigate()
    const handleExam = () => {
        navigative("/exam")
    }
  return (
    <div id='__next'>
        <div className='relative overflow-x-hidden text-white'>
            <div className="fixed z-[2] w-full flex justify-between items-center px-[3%]">
                <a className="hidden-custom sm:block w-[24.984245%] max-w-[415px]" href="/">
                    <button className="relative max-w-[330px]">
                        <img alt="back" width="347" height="112" decoding="async" data-nimg="1" className="z-0 img-back" src={imgBack}/>
                        <div className="absolute inset-0 top-[14%] left-[50%] right-[16.5%] bottom-[42%] flex justify-center items-center">
                            <svg viewBox="0 0 100 33" xmlns="http://www.w3.org/2000/svg" className="w-full">
                                <foreignObject width="100" height="33">
                                    <p xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-medium uppercase text-back">Easy</p>
                                </foreignObject>
                            </svg>
                        </div>
                    </button>
                </a>
                
                <a className="sm:hidden w-[13.629032%] max-w-[169px]" href="/">
                    <img alt="back" loading="lazy" width="558" height="336" decoding="async" data-nimg="1" className="w-full img-back" src={imgBackM} />
                </a>
                
                <div className="relative w-[45.741935%] max-w-[654px] -translate-y-[27%]">
                    <img alt="title" width="1690" height="376" decoding="async" data-nimg="1" className="z-0" src={titleImg}/>

                    <div className="absolute inset-0 pt-[5.5%]">
                        <svg viewBox="0 0 100 13.5" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <foreignObject width="100" height="13.5">
                                <p xmlns="http://www.w3.org/1999/xhtml" className="text-title truncate block text-center font-bold uppercase">Hard</p>
                            </foreignObject>
                        </svg>
                    </div>
                </div>

                <button className="relative hidden-custom sm:block w-[24.984245%] max-w-[415px]">
                    <img alt="random" width="415" height="112" decoding="async" data-nimg="1" className="z-0" src={buttonRan}/>
                    <div className="absolute inset-0 top-[14%] left-[11%] right-[43%] bottom-[42%] flex justify-center items-center">
                        <svg viewBox="0 0 100 21" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <foreignObject width="100" height="21">
                                <p xmlns="http://www.w3.org/1999/xhtml" className="text-random truncate block text-center font-medium uppercase">Ngẫu nhiên</p>
                            </foreignObject>
                        </svg>
                    </div>
                </button>

                <button type="button" className="sm:hidden w-[13.629032%] max-w-[169px]">
                    <img alt="random" loading="lazy" width="186" height="112" decoding="async" data-nimg="1" src={buttonRanM}/>
                </button>
            </div>

            <div className="relative w-[150%] -ml-[25%] sm:w-full sm:ml-0 main-content">
                <img alt="map background" width="2880" height="3240" decoding="async" data-nimg="1" className="z-0 w-full" src={mapBackground}/>
                <div className="absolute inset-0">
                    <button className="absolute w-[11.715915%] top-[6.960857%] left-[60.825363%]" onClick={handleExam}>
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPoint}/>
                        <div className="absolute inset-0">
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">1</h2>
                                </foreignObject>
                            </svg>
                        <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                            <img alt="checkpoint title" width="684" height="213" decoding="async" data-nimg="1" className="z-0" src={checkPointTitle}/>
                            <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <foreignObject width="100" height="28.8">
                                        <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold" >
                                            <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden">Bài 1 </span>
                                        </p>
                                    </foreignObject>
                                </svg></div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[8.201304%] left-[31.756756%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">2</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="684" height="213" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden">Bài 2 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[25.0234%] left-[38.825364%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">3</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="684" height="213" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden" >Bài 3 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[29.916123%] left-[62.525987%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">4</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="450" height="141" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden" >Bài 4 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[47.390494%] left-[47.713098%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">5</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="450" height="141" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden">Bài 5 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[62.629937%] left-[60.631873%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">6</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="450" height="141" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden" >Bài 6 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[63.000931%] left-[35.239085%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">7</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="450" height="141" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden" >Bài 7 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[79.72973%] left-[32.380457%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <div className="absolute inset-0">
                            <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                            <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                                <foreignObject width="100" height="34">
                                    <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">8</h2>
                                </foreignObject>
                            </svg>
                            <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                                <img alt="checkpoint title" width="450" height="141" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                                <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                    <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <foreignObject width="100" height="28.8">
                                            <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                                <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden">Bài 8 </span>
                                            </p>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="absolute w-[11.715915%] top-[84.43616%] left-[61.746362%]">
                        <img alt="checkpoint" width="699" height="489" decoding="async" data-nimg="1" className="z-0" src={checkPointDisable}/>
                        <img alt="locked" loading="lazy" width="183" height="231" decoding="async" data-nimg="1" className="absolute z-[1] w-[28.105263%] right-[1%] top-0" src={lockedImg}/>
                        <svg viewBox="0 0 100 34" xmlns="http://www.w3.org/2000/svg" className="w-full absolute top-[31.530973%] scale-[0.8] translate-y-[-8%]">
                            <foreignObject width="100" height="34">
                                <h2 xmlns="http://www.w3.org/1999/xhtml" className="truncate block text-center font-bold text-[#000e41]">9</h2>
                            </foreignObject>
                        </svg>
                        <div className="absolute w-[132.743362%] -left-[16.371681%] top-[64.159292%] scale-[0.6]">
                            <img alt="checkpoint title" width="450" height="141" decoding="async" data-nimg="1" className="z-0" src={checkPointTitleDisable}/>
                            <div className="absolute inset-0 px-[15%] pb-[6%] scale-[1.2] pt-[7%]">
                                <svg viewBox="0 0 100 28.8" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <foreignObject width="100" height="28.8">
                                        <p xmlns="http://www.w3.org/1999/xhtml" className="h-full flex items-center justify-center font-bold">
                                            <span className="[display:-webkit-inline-box] [-webkit-box-orient:vertical] overflow-hidden">Bài 9</span>
                                        </p>
                                    </foreignObject>
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hard;