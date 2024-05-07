import react from 'react'
import { CgGym } from "react-icons/cg";
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
            <div>
                <div className='w-screen h-20 bg-slate-500 border-b border-black flex items-center justify-between'>
                    <div className='ml-5'>
                        <CgGym size={"4rem"} />
                    </div>
                    <div className='mr-5'>
                        <button className='mx-3 font-semibold text-xl'>Home</button>
                        <button className='mx-3 font-semibold text-xl'>Blogs</button>
                        <button className='mx-3 font-semibold text-xl'>Contact</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;