import React from 'react';
import { VscQuestion, VscChevronRight } from 'react-icons/vsc';
import { BsSuitHeart, BsFillStarFill } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { data } from '../data/jsondata';

function Home() {
    const stars = 5;
    return (
        <div className='w-full h-screen flex flex-col justify-between'>
            {data.map((d,key)=>{
                return(
                    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                        <div key={key} class="col-span-2 mt-10">
                            <h2 className='m-auto text-4xl font-bold'>{ d.title }</h2>
                            <h2 className='flex text-gray-400 text-2xl font-light'>{ d.category } <VscQuestion className='mt-2 ml-2' /></h2>
                        </div>
                        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                            <p className='text-lg'>{ d.description } </p>
                            <div className='flex flex-row'>
                                <div className='m-1 mr-2 w-9 h-9 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white'>
                                    <img src={d.Avatar} class="rounded-full" alt='teacher avatar' />
                                </div>
                                <h2 className='m-2 mr-1 font-bold text-base text-indigo-600'>{d.creator}</h2>
                            </div>
                            <div className='flex flex-row'>
                                {[...Array(stars)].map((i) => <span key={i}>
                                    <BsFillStarFill className='mt-2 text-yellow-500 text-xl' />
                                </span>)}
                                <p className='mt-2 px-2'>{d.teacher_reviews}<span className='px-2'>total reviews for this teacher</span></p>
                            </div>
                            <div className='flex flex-row'>
                                {[...Array(stars)].map((i) => <span key={i}>
                                    <BsFillStarFill className='mt-2 text-yellow-500 text-xl' />
                                </span>)}
                                <p className='mt-2 px-2'>{d.class_reviews}<span className='px-2'>reviews for this class</span></p>
                            </div>
                            <h1 className='mt-2 font-medium text-lg'>Completed by { d.completed } Learners</h1>
                            <div className='mt-5'>
                                <div className='flex justify-between flex-wrap py-3'>
                                    <a href='#' className='flex p-3 px-6 pt-2 text-white font-bold bg-indigo-600 rounded-full baseline'>See Class Schedule <VscChevronRight className=' text-2xl' /></a>
                                    <a href='#' className='flex text-blue font-bold m-auto text-xl text-indigo-600 px-1 md:px-7'><span className='px-2 mt-1 ml-7'><BsSuitHeart className='text-indigo-600' /></span>Save</a>
                                    <a href='#' className='flex text-blue font-bold m-auto text-xl text-indigo-600'><span className='px-2 mt-1 ml-7'><FaShare /></span>Save</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="hidden md:flex items-stretch">
                                <div>
                                    <img className='w-full h-full' src={d.img1} alt='article 1' />
                                </div>
                                <div class="grid justify-items-stretch">
                                    <div>
                                        <img className='w-full pl-2' src={d.img2} alt='article 2' />
                                    </div>
                                    <div>
                                        <img className='w-full pl-2 mt-1' src={d.img3} alt='article 3' />
                                    </div>
                                </div>
                            </div>               
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Home;