"use client";
import EventFunctionState from "./components/EventFunctionState";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const handleNavigation=(routerName)=>{
    router.push(routerName)
  }
  const buttonStyles="ml-4 font-serif text-2xl text-red-600 hover:text-white"
  return (
    <div className="text-4xl text-center mt-10">
      {/* link base routing */}
      {/* <Link className={buttonStyles} href="/home">Home</Link>
      <Link className={buttonStyles} href="/about">About</Link>
      <Link className={buttonStyles} href="/contact">Contact</Link> */}
     
      {/* navigaton base routing */}
      {/* <button onClick={()=>router.push("/home")} className={buttonStyles}>Home</button>
      <button onClick={()=>router.push("/about")} className={buttonStyles}>About</button>
      <button onClick={()=>router.push("/contact")} className={buttonStyles}>Contact</button> */}
      {/* make function for handle routing and make variable for styling to avoid code dulplication */}
      <button onClick={()=>handleNavigation("/home")} className={buttonStyles}>Home</button>
      <button onClick={()=>handleNavigation("/about")} className={buttonStyles}>About</button>
      <button onClick={()=>handleNavigation("/contact")} className={buttonStyles}>Contact</button>
       <EventFunctionState/>
    </div>
  );
}
///