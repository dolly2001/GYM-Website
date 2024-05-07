import react from 'react'

const HeroSection = () => {
    return(
        <>
            <div>
                <div className='flex justify-center items-center mt-24 gap-5'>
                    <div>
                        <img className="h-72 w-64" src="src/assets/png-clipart-physical-fitness-fitness-centre-bodybuilding-strength-training-bodybuilding-boxing-glove-sports-removebg-preview.png" alt="GYM" />
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ex fugiat, doloremque quam sapiente ut est ducimus vero expedita veritatis perspiciatis consequatur, nihil eos necessitatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, quas?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;