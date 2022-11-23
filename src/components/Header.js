import user from './user.png' 
import Logo from './Logo'

const Header = () => {
    return(
        <div className="p-3 bg-header h-20 w-full flex items-center flex-row justify-between">
            <Logo/>
            <div class="space-y-2 md:hidden">
                <div class="w-8 h-0.5 bg-gray-600"></div>
                <div class="w-8 h-0.5 bg-gray-600"></div>
                <div class="w-8 h-0.5 bg-gray-600"></div>
            </div>

            <div className="font-cabin  text-xl flex flex-row items-center">
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
        </div>
    )
}

export default Header