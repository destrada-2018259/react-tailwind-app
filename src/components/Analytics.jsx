import React from 'react'
import Laptop from '../assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>Data Analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur esse ducimus maiores obcaecati rerum beatae tempore illum iste quas alias eos repellendus, sed reprehenderit molestiae delectus dicta aspernatur adipisci possimus reiciendis nostrum eum modi molestias. Laboriosam excepturi tenetur, sit nisi officiis nemo labore ex a rerum in aliquid magnam veniam obcaecati deserunt, necessitatibus soluta sint. Accusantium, unde cupiditate esse molestiae velit tenetur co</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-o py-3 bg-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
