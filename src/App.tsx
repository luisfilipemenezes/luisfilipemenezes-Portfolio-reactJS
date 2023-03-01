import { useState } from 'react'
import './App.css'
import {GetImageCenter,GetImageLeft,GetImageRight} from  './Help/index'

function App() {
  const [count, setCount] = useState(0)

  function changeMore(){
    if (count<1){
      setCount(count+1)
    }
  }

  function changeLess() {
    if (count>0){
      setCount(count-1)
    }
  }

  

  return (
    <div className=' text-slate-50 font-sans tracking-wider'>
      <div className=' w-full h-screen imgBack   bg-no-repeat bg-cover '>
        <div className='w-full h-1/6 flex transparencia fixed '>
          <header className='w-5/6  h-1/6  flex  m-auto items-center  text-lg padFirstLeft '>
            <div className='flex-1 flex items-center h-2/4 '>
              <ul className='flex w-full  items-center'>
                <li className='flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <a className=' m-auto' href="">HOME</a>
                </li>
                <li className='flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <a className=' m-auto' href="">ABOUT</a>
                </li >
                <li className='flex flex-1 flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <a className=' m-auto' href="">RESUME</a>
                </li>
                <li className='flex flex-1 flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <a className=' m-auto' href="">PORTFOLIO</a>
                </li>
              </ul>
            </div>
            <div className='flex-1 flex justify-end'>
              <p className='rounded active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>LUIS FILIPE</p>
            </div>
          </header>
          </div>  

        <div className='h-4/6 w-5/6  flex flex-col m-auto pad-top'>
          <div className='flex-1 flex flex-col justify-end  ml-20'>
            <h2 className='text-6xl font-medium tracking-wide'>LUIS</h2>
            <h1 className='text-7xl font-extrabold tracking-wide'>FILIPE</h1>
            <p className='text-2xl font-light letterspacing'>Web Developer</p>
          </div> 
          <div className='flex-1  ml-20 mt-10 '>
            <button className='rounded-lg hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800 border-2 rounded-2xl mr-10 w-28 font-light tracking-wide'>
              Resume
            </button>
            <button className=' rounded-lg hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800 border-2 rounded-2xl mr-10 w-28 font-light tracking-wide'>
              Portfolio
            </button>
          </div>
        </div>
        
        <div className='h-1/6  w-5/6 m-auto flex mt-24' >
          <div className='flex flex-1 justify-start items-center'>
            <div className=' insta width-linke height-linke bg-cover'> 
            </div>
            </div>
          <div className='flex flex-1 justify-end items-center  '>
            <div className='rodape width-linke height-linke bg-cover  bg-no-repeat bg-contain' ></div>
          </div>
        </div>
      </div>
      <div>
        <div className=' w-full h-screen bgColorSegPag  bg-no-repeat bg-cover flex '>
          <div className='flex flex-col h-full w-5/6  m-auto pad-top-seg'>
            <div className='flex-seg-text  flex'>
              <p className='text-2xl m-auto text-center font-light'>
              Sou estudante de Sistemas de Informação e atualmente estou cursando o 5º período no Centro Universitário Unifacisa, busco meu primeiro emprego no setor de TI como desenvolvedor.
              </p>
            </div>
            <div className='flex-seg-img   m-top-seg-img flex '>
              <div className='flex-1 flex items-center justify-end mr-10' >
                <div className='sizeHover  flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <div className='m-auto sizeLeft flex ' onClick={changeLess} >
                  <GetImageLeft />
                  </div>
                </div>
              </div>
              <div className=' w-1/2 m-auto flex m-auto bg-no-repeat bg-cover '>
                <GetImageCenter value={count} />
                
              </div>
              <div className='flex-1 flex items-center justify-start ml-10'>
                <div className='sizeHover  flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <div className='m-auto sizeLeft flex' onClick={changeMore}>
                  <GetImageRight/>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
