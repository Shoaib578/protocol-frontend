import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function About(){
    useEffect(()=>{
      console.log("Hello world");
    },[]);
  
    return(
     

    <div  className='h-screen'>
          <h1 className="text-4xl my-8 text-black text-center">Welcome to Talwind Sidebar Tutorial</h1>

    </div>
   
      )
 
}