import { useRouter } from 'next/router';
import React from 'react'
import {AiFillFacebook ,AiOutlineLink,AiFillTwitterCircle} from 'react-icons/ai';



const Share = () => {
    const router = useRouter()
    // console.log('router: ', router);
  return (
    <>
    <h1 className='pt-2 font-medium'>Show your love</h1>
    <div className='flex gap-1 mt-1'>
        <button
            className='flex bg-blue-600 text-white rounded-md px-2 py-1 text-center gap-2 text-sm items-center'>
            <AiFillFacebook/>
            Share
        </button>
        <button
            className='flex bg-blue-400 text-white rounded-md px-2 py-1 text-center gap-2 text-sm items-center'>
            <AiFillTwitterCircle/>
            Tweet
        </button>
        <button
        onClick={()=>navigator.clipboard.writeText('router.location')}
            className='flex bg-gray-600 text-white rounded-md px-2 py-1 text-center gap-2 text-sm items-center'>
            <AiOutlineLink/>
            Copy URL
        </button>

    </div>
        </>    
  )
}

export default Share