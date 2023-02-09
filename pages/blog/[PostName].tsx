// import Navbar from '@/Components/Navbar'
// import Share from '@/Components/Share';
// import {NextSeo} from 'next-seo';
import Head from 'next/head';
import {useEffect, useState} from 'react';
// import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { Share } from '@mui/icons-material';
// import Footer from '../../src/Components/Footer/Footer';
// import Navbar from '../../src/Components/Navbar/Navbar';
import AuthorInfo from '../../src/Components/blog/AuthorInfo';
import ContentTable from '../../src/Components/blog/ContentTable';
import Layout from '../../src/Layout/Layout';
// import article from '../../../articles.json'

// const blogPost : {
//     id : string,
//     title : string,
//     text : {
//         content: string,
//         type?: string,
//         className?: string
//     }[]
// }[] | any = article?.post1 || []
interface IblogPost  {
    id: any;
    title: any;
    postDate: any;
    tags: any;
    body: any;
}
const GetContentTableLinks = (blogPost :IblogPost ) => {
    // if (!blogPost) 
    //     return null;
    // const links = []

    // for (let i = 0; i < blogPost.length; i++) {
    //     const link = {
    //         title: blogPost[i].title,
    //         id: blogPost[i].id

    //     }
    //     links.push(link)
    // }
    // return links
    return null;
}
const Index = ({data}:any) => {
    const article = data && JSON.parse(data)[0];
    console.log('article: ', article);
    const blogPost = {
        id: article.sys.id,
        title: article.fields.postTitle,
        postDate: article.fields.postDate,
        tags: article.fields.tags,
        img : article.fields?.postImg?.fields?.file?.url || `${process.env.NEXT_PUBLIC_DEFAULT_IMG}`,
        body : article.fields.body.split('\n')
    }
    const router = useRouter()
    const [links,
        setLinks] = useState < {
        title: string,
        id: string
    }[] > ([])

    useEffect(() => {
        const ContentLinks = GetContentTableLinks(blogPost)
        if (ContentLinks) 
            setLinks(ContentLinks)
    }, [])

    return (

        <Layout title={{ar:'بلوغ',en:'blog'}} description={{ar:'بلوغ',en:'blog'}}>
        <>
            <Head>
                {/* <NextSeo
                    title="5 Easy Steps to Start a Blog in 2023"
                    description="Want to start blogging? Here's a short guide to help you create the perfect blog and content, and what to learn before monetizing it to maximize revenue."
                    canonical="https://www.canonical.ie/"
                    openGraph={{
                    url: 'https://www.url.ie/a',
                    profile: {
                        firstName: 'Vito',
                        lastName:'Medlej'
                    },
                    article: {
                        authors: ['Vito Medlej']
                    },
                    images: [
                            {
                            url: 'https://kinsta.com/wp-content/uploads/2019/04/how-to-monetize-a-blog.png'
                        }, {
                            url: 'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }
                    ],
                    siteName: 'PasRead'
                }}
                /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta http-equiv="content-language" content="en"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="keywords" content="Blog, Blogging, Earn Money, Online Marketing, Income, Advertise, Ads"/>
                <meta name="page-topic" content="Blogging"/>
                <meta name='category' content='Blogging'/>
                <meta name='coverage' content='Worldwide'/>
                <meta name="page-type" content="Blogging"/>
                <meta name="audience" content="Everyone"/>
                <meta name="robots" content="index, follow"/>

            </Head>
            {/* <Navbar animateMenu={}/> */}
            <div className='grayedd'>

            <div
                className="flex gap-5 w-100 smmax-w-7xl mb-10 mx-auto pt-20   flex-col-reverse lgflex-row-reverse">
                <div className=" flex flex-col">

                    {/* <AuthorInfo author={article.postAuthor}/> */}

                    <div className='mt-2 bg-white p-4 '>
                        <h1 className="font-semibold text-xl text-gray-700">
                            {blogPost.title}:
                        </h1>
                        <ContentTable links={links}/>
                    </div>
                </div>

                <div
                    className=' relative w-100 smmax-w-4xl   bg-white  py-10 shadow-md  '>

                    <div className='px-3 smpx-10'> 
                        <h1 className='text-3xl smtext-4xl mdtext-5xl h1-line-height font-semibold '>
                            {`${blogPost.title}`}
                        </h1>
                        <div className='border-b pb-1 flex mt-5 gap-2'>

                            <span className='font-light text-sm text-gray-600'>{article.postDate}
                                &#x2022;
                            </span>
                            <span className='font-light text-sm pl-1 text-gray-600'>0 comments</span>
                        </div>
                        <div className='py-10'>
                            <img className='img' src={`${blogPost.img}`} alt="Blog Post Image"/>
                        </div>
                        <div className='text-lg text-gray-800 pb-5 flex gap-5 flex-col'>
                            {/* <p>
                                Have you considered starting a lifestyle blog, a niche blog, or a blog to
                                promote your business but don&apos;t know where to begin?
                            </p>
                            <p>
                                Worry not! With our plan and guide, starting a blog is so much easier! Today you
                                will learn how to start blogging to achieve financial success in 2023.
                            </p>
                            <p>
                                According to MillennialMoney, &quot;It&apos;s pretty easy to make an extra
                                $500–$2,000 per month blogging in your first year. And then in years 2, 3, 4,
                                and 5, you can significantly increase your monthly blog revenue. Glassdoor
                                reports that the average blogger&apos;s salary is over $50,000 per year, based
                                on several anonymously submitted salaries.&quot;
                            </p>
                            <p>
                                Everyone can make money blogging, everyone, including you. So get that doubt and
                                fear out of your heart and read till the end, it is worth it. Now let&apos;s get
                                started.
                            </p> */}
                            {/* <ContentTable links={links}/>  */}
                            
                   
{blogPost && blogPost.body && 
<div className='whitespace-pre-wrap w-100'>
        
    {blogPost.body.map((text:string,idx:number) => {
        if (text.length === 0) {
            return <br key={idx}/>
        }
        if (text.toLowerCase().includes('[image]')) {
            let url = text.slice(text.indexOf('(') + 1,-1);
            return <div  key={url}>

                <img className='img' src={`${url}`} alt={`Blog Post Image`}/>
            </div>
        }
        if (text.includes('###')) {
            
            return <h2 key={text}  className='font-semibold text-2xl pt-5 pb-4'>{text.replace(/#/gi, '').replace(/\s+/, "") }</h2>
        }
        if (text.startsWith('#')) {
            let str= text.replace(/#/gi, '').replace(/\s+/, "")
        return <h1 key={text} id={`${str.replace(/ /g, "-")}`} className=' pb-4  title h1-line-height'>{str}</h1>
        }
        if (text.includes('](')) {
            // let url = text.slice(text.indexOf('(') + 1,-1);
            // let title = text.slice(text.indexOf('[') + 1,text.indexOf(`]`));
                // return <a
                // className='link underline'
                // target='_blank'
                // href={`${url}`}
                // >
                //     {title}
                // </a>
                return <p>
                    {text}
                </p>
        }
        if (text.startsWith('-')) {
            let str = text.replace(/\s+/, "")
            console.log('text: ', text);
            // .replace(/-/gi,'')
            // .replace(/\s+/, "")
            // str.replace(/ /g, "-")
            // console.log(str.replace(/ /g, "-"));
            return <li key={str} className='underline list-disc font-500 link '>
                <a 
                href={`#${str.replace(/ /g, "-").replace(/-/,'')}`}
                >
                        {/* {str.replace(/-/gi,'')} */}
                        {str.replace(/-/,'')}
                </a>
                </li>
            }
        if (text.startsWith(`${Number(text[0])}`) && text[1] === '.') {
            return <h4 className='font-medium'>{text}</h4>
        }
        return <p key={text}>{text}</p>
    })}
    
</div>

}
                        </div>

                    <div className='border-t py-4 flex gap-2 font-medium flex-wrap'>
                        {blogPost.tags.map((tag:string) => {
                            return <div
                                key={tag}
                                className='border-2 border-md border-blue-600 text-blue-600 rounded-xl py-1 px-3'>
                                {tag}
                            </div>
                        })}
                    </div>

                    <Share/>
                    </div>
                </div>

            </div>
            </div>

        </>

            {/* <Footer/> */}
        </Layout>

    )

}

export default Index


export const getServerSideProps = async () => {
try {

    const contentful = require('contentful')
    const client = contentful.createClient({
      space: '77a4n2zr9hoq',
      accessToken: 'VReuqOgETlRp_2AlEsEMcyD8ImJIzBgha84M7oR2EJo'
        })
 
  const results = await client.getEntries()
  .then((response:any) =>  response.items)
if (results) {
    return {
        props: { data :  JSON.stringify(results)}
    }
}
}
catch (e) {
    console.log('e: ', e);
    return {
        redirect : {
            permanent: false,
            destination: `/`
        },
    }
}
}