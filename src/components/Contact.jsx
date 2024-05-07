import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='flex justify-center items-center mb-10'>
                <div className='flex p-8 w-[60%] border rounded-2xl border-black flex-col items-center mt-10'>
                    <h1 className='text-3xl font-semibold py-2'>Contact</h1>
                    <form action='post' >
                        <div className='mb-5 flex flex-col'>
                            <label htmlFor="name" className='text-xl mb-2'>Name : </label>
                            <input type="text" placeholder='Name' className='h-10 w-80 p-2 border border-black rounded ' />
                        </div>
                        <div className='mb-5 flex flex-col'>
                            <label htmlFor="email" className='text-xl mb-2'>Email :</label>
                            <input type="email" placeholder='Email' className='h-10 w-80 p-2 border border-black rounded ' />
                        </div>
                        <div className='mb-5 flex flex-col'>
                            <label htmlFor="email" className='text-xl mb-2'>Query :</label>
                            <textarea className='border border-black rounded p-2' cols="30" placeholder='write something here...'></textarea>
                        </div>
                        <div className='flex justify-around items-center'>
                            <div>
                                <h1>xyz@gmail.com</h1>
                                <h1>xyz road, abc building, </h1>
                            </div>
                            <button className='flex justify-center items-center font-semibold text-xl bg-cyan-500 px-6 py-3 h-8 m-auto mt-14 w-32 rounded border border-black'>send</button>
                   
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact