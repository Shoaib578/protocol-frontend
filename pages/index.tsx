import { NextPage } from "next";
import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  },
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  }
  ,
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  },
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  },
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  },
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  }
  ,
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  },
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  }
  ,
  {
    "title":"Hello there",
    "date":"March 20,16",
    "category":"Marketing"
  }
]



export default function Home() {
  return (
    <div className='h-screen'>
      <h1 className="mt-24 text-4xl my-8 text-black">Projects</h1>
      <h1 className="text-black">Learn how to grow your business with our expert advice</h1>


        <div className={data.length>2?"flex flex-row flex-wrap items-center justify-center  space-x-4 mt-16  lg:w-9/12 xl:9/12 lg:ml-48 xl:ml-48":"flex flex-row flex-wrap items-center justify-center  space-x-4 mt-16  lg:w-9/12 xl:w-9/12 lg:mr-48 xl:mr-48"} >
    {data.map(item=>{
      return <div className="border border-gray rounded-lg w-11/12 lg:w-3/12 xl:w-3/12 mt-5 " >
      <Image src={require('../components/layout/cat.jpeg')} className="rounded-lg " style={{ height:230 }}/>
      <div className="flex flex-col  p-5">
            <div className="flex flex-row justify-between">

           <h1>March 16,20</h1>
           <h1 className="text-black">Marketing</h1>
            </div>
          <div>

           <h1 className="text-black text-bold  float-left">Boost your conversion rate asasdasdasdadasdasdasdasd</h1>
           <br />
           <br />

           <h1 className="text-black ">jaosdjoasjdoasdjasodjoajsodjaoasdasdsasad...</h1>
          </div>
         </div>
        
        
      
         
         
   
  
     </div>
    })}
     



    
    </div>
    </div>
  
  

  )
}
