import Link from 'next/link';
import React from 'react'

const ContentTable = ({links}:{links:any}) => {
  return (

    <>
    {links ?
    <div className=' bg-white'>
    <ul className='links text-blue-600 underline'>
        {links.map((link:{title:string,id:string})=>{
            
        return <li key={link.id}>
            <Link href={`#${link.id}`}>{link.title}</Link>
        </li>}
        )}
    </ul>
</div>
 : ''} 
    </>
  )
}

export default ContentTable