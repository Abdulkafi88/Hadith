import React, { useEffect, useState } from "react";
const HadithOfDay = () => {
    const [hadith,sethadith] = useState([])
    useEffect(()=>{
        const getHeadth =  async()=>{
            try{
                const res = await fetch('https://random-hadith-generator.vercel.app/bukhari/')
                const data = await res.json()
                if(data.data){
                    sethadith(data)
                }
                console.log(data.data)
            }catch(err){
                console.log(err)
            }
        }
        getHeadth()
    },[])
  return (
    <React.Fragment>
      <div className="flex justify-center items-center mt-96 ">
        <div className=" bg-white w-2/5 h-80 ">
            <p className="">dsfsfs</p>
           
        </div>
      </div>
    </React.Fragment>
  );
};

export default HadithOfDay;
