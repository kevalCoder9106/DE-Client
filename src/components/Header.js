import user from './user.png' 
import Logo from './Logo'
import { useState } from 'react'

const Header = () => {
    const [headerMenu, toggleHeaderMenu] = useState(false)

    const onClickHeaderMenu = () => {
        toggleHeaderMenu(!headerMenu)
        document.getElementById('headerMenuContainer').classList.toggle('-translate-x-full')
    }

    return(
        <div className="p-3 bg-header h-20 w-full flex items-center flex-row justify-between">
            <Logo/>
            {
                !headerMenu
                &&
                <div onClick={onClickHeaderMenu} className="space-y-2 md:hidden cursor-pointer">
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                </div>
            }
            {
                headerMenu
                &&
                <svg onClick={onClickHeaderMenu} class="h-10 w-10 text-black"  width="32" height="32" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            }

            <div className="hidden md:flex font-poppins  text-xl flex-row items-center">
                <div className="mx-5 p-2 hover:text-font_1 ">
                    <a href="#">Calories Tracker</a>
                </div>
                <div className="mx-5 p-2 hover:text-font_1 ">
                    <a href="#">Diet</a>
                </div>
                <div className="mx-5 p-2 hover:text-font_1 ">
                    <a href="#">
                        <img className='w-2/3' src={user}></img>
                    </a>
                </div>
            </div>
            <div id='headerMenuContainer' className='md:hidden duration-100 -translate-x-full ease-out transition-all p-3 absolute left-0 top-0 bottom-0 w-2/3 h-screen bg-bg shadow-md flex items-start font-poppins text-xl flex-col'>
                <Logo/>
                <div className="my-5 p-3 w-5/6 bg-header hover:bg-bg rounded-md shadow-sm ">
                    <a href="#">Calories Tracker</a>
                </div>
                <div className="my-5 p-3 w-5/6 bg-header hover:bg-bg rounded-md shadow-sm">
                    <a href="#">Diet</a>
                </div>
                <div className="my-5 p-3 w-5/6 bg-header hover:bg-bg rounded-md shadow-sm ">
                    <a href="#">Profile </a>
                </div>
            </div>
        </div>
    )
}

export default Header