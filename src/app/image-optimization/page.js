import React from "react";
import Image from "next/image";
import img from "../favicon.ico";
const ImageOptimization = () => {
  console.log(img);

  return (
    <>
      <div>image optimization in next.js</div>
      {/* <Image src={img} width={100} height={80} alt='logo-image'/> */}
      <Image
        src={
          "https://images.pexels.com/photos/28410262/pexels-photo-28410262/free-photo-of-default.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="pixel image"
        width={400}
        height={350}
      />
    </>
  );
};

export default ImageOptimization;
export function generateMetadata(){
    return {
        title:"image optimization",
        description:"my image optimization page"
    }
}
