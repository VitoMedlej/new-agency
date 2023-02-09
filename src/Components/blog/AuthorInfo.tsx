import Share from "./Share"


const AuthorInfo = ({author}:{author:string}) => {
    return (
        <div className="bg-white px-4 h-fit py-5">
            <img
                className='rounded-full py-1'
                src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:60/h:60/q:90/dpr:1.1/f:avif/https://s15165.pcdn.co/wp-content/uploads/2018/09/john-h-1.png"
                alt="Author Profile Picture"/>
            <h1>By
                <span className='font-medium'>{' '}{author}</span>
            </h1>
            <p className='py-1 text-gray-400 font-light text-sm'>{author} is a blogging addict,
                Web development pro, and a business manager</p>

         <Share/>    
        </div>
    )
}

export default AuthorInfo

















