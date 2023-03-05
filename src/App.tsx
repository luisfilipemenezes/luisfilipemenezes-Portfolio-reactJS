import { useState } from 'react'
import './App.css'
import {GetImageCenter,GetImageLeft,GetImageRight, GetImgNav,GetImgGmail} from  './Help/index'

function App() {

  const [count, setCount] = useState(0)
  const [header, setHeader] = useState(false)

  function changeMore(){
    count<1?setCount(count+1):setCount(0)
  }

  function changeLess() {
    count>0?setCount(count-1):setCount(1)
  }

  function ChangeHeader(){
      header? setHeader(false):setHeader(true)
  }


  return (
    <div className=' text-slate-50 font-sans tracking-wider'>
      <div className=' w-full h-screen imgBack   bg-no-repeat bg-cover '>
        {header? <div className='w-full h-1/3  flex transparencia fixed '>
        <div className='w-full  h-1/3 flex transparencia fixed '> 
              <header  className='w-5/6  h-1/3  flex  m-auto items-center  md:text-lg padFirstLeft '>
                <div className='flex-1 flex items-center h-1/3  '>
                  <ul className=' w-full  items-center  md:flex'>
                    <li className='flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' href="">HOME</a>
                    </li>
                    <li className='flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' target='_blank' href="https://www.linkedin.com/in/luis-filipe-11a91b1b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUJ5DRy9ITJafqtOlNtAN0A%3D%3D">ABOUT</a>
                    </li >
                    <li className='flex flex-1 flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' href="https://www.canva.com/design/DAFbzehGjx0/EO_NCrhjzl61ucJDQlvGEw/view?utm_content=DAFbzehGjx0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'>RESUME</a>
                    </li>
                    <li className='flex flex-1 flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' href="">PORTFOLIO</a>
                    </li>
                  </ul>
                </div>
               
              </header>
            </div>

        </div>:
        <div className='w-full h-1/6  flex transparencia fixed '>
            <div className='w-full  h-1/6 flex transparencia fixed '> 
              <header  className='w-5/6  h-1/6  flex  m-auto items-center  md:text-lg padFirstLeft '>
                <div className='flex-1  flex items-center h-2/4  '>
                  <div className='w-10 md:hidden ' onClick={ChangeHeader}>
                    <GetImgNav/>
                  </div>
                  <ul className='flex w-full  items-center hidden md:flex'>
                    <li className='flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' href="">HOME</a>
                    </li>
                    <li className='flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' target='_blank' href="https://www.linkedin.com/in/luis-filipe-11a91b1b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUJ5DRy9ITJafqtOlNtAN0A%3D%3D">ABOUT</a>
                    </li >
                    <li className='flex flex-1 flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' href="https://www.canva.com/design/DAFbzehGjx0/EO_NCrhjzl61ucJDQlvGEw/view?utm_content=DAFbzehGjx0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target='_blank'>RESUME</a>
                    </li>
                    <li className='flex flex-1 flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                      <a className=' m-auto' href="">PORTFOLIO</a>
                    </li>
                  </ul>
                </div>
                <div className='flex-1 flex justify-end'>
                  <p className='text-sm md:text-lg rounded active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                    +55 (83) 99929-1308</p>
                </div>
              </header>
            </div>
          </div>  }

        <div className='h-4/6 w-5/6  flex flex-col m-auto pad-top '>
          <div className='flex-1 flex flex-col justify-end m-0 lg:ml-20'>
            <h2 className=' md:text-6xl text-3xl font-medium tracking-wide'>LUIS</h2>
            <h1 className='md:text-7xl text-5xl font-extrabold tracking-wide'>FILIPE</h1>
            <p className='md:text-2xl font-light  text-base  letterspacing'>Web Developer</p>
          </div> 
          <div className='flex-1 m-0 lg:ml-20 mt-10 '>
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
            <div className='w-14 md:hidden'>
            <GetImgGmail/>
              </div>
            <p className='hidden md:flex text-lg  letterspacing rounded-lg hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
              luisfilipeemenezes@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=' w-full h-screen bgColorSegPag  bg-no-repeat bg-cover flex '>
          <div className='flex flex-col h-full w-5/6  m-auto pad-top-seg'>
            <div className='flex-seg-text md:flex-1 flex flex05'>
              <p className='md:text-2xl m-auto md:text-center text-justify font-light'>
              Estudante de Sistemas de Informação, atualmente  cursando o 5º período no Centro Universitário Unifacisa e em busca do primeiro emprego no setor de TI como desenvolvedor.
              </p>
            </div>
            <div className='flex-seg-img   m-top-seg-img flex '>
              <div className='flex-1 hidden md:flex  items-center justify-end mr-10' >
                <div className='sizeHover  flex rounded-lg flex-1 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring ease-in duration-300  shadow-lg hover:shadow-gray-800'>
                  <div className='m-auto sizeLeft flex  ' onClick={changeLess} >
                  <GetImageLeft />
                  </div>
                </div>
              </div>
              <div className=' md:w-1/2 w-full m-auto flex m-auto bg-no-repeat bg-cover ' onClick={changeMore}>
                <GetImageCenter value={count}  />
                
              </div>
              <div className='flex-1 hidden md:flex items-center justify-start ml-10'>
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
