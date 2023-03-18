import React from 'react'
import Radial from '../components/Radial'

const RadialPopup = () => {
  return (
    <div>
                <div className="py-2 md:flex md:flex-wrap md:justify-center md:gap-4 lg:flex lg:flex-wrap lg:gap-6 lg:justify-center px-1 bg-gray-100">
                         
            <Radial 
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 mt-4 md:mt-10 lg:mt-10 mb-16 md:mb-4 md:px-6"
              }
              text1={"80%"}
              text2={"Javascript"}
              color={"text-yellow-400"}
              perc={"300"}
            />
            <Radial
              className1={ 
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-10 lg:mt-10 mb-16 md:mb-4"
              }
              text1={"80%"}
              text2={"ReactJs"}
              color={"text-blue-500"}
              perc={"300"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-10 lg:mt-10 mb-16 md:mb-10"
              }
              text1={"70%"}
              text2={"VueJs"}
              color={"text-green-400"}
              perc={"287"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-10 lg:mt-10 mb-16 md:mb-10 "
              }
              text1={"50%"}
              text2={"AngularJs"}
              color={"text-red-600"}
              perc={"245"}
            />
            <Radial
              className1={
                "flex items-center flex-wrap px-10 bg-white shadow-xl rounded-2xl h-16 md:mt-10 lg:mt-8 mb-5"
              }
              text1={"65%"}
              text2={"Laravel"}
              color={"text-orange-400"}
              perc={"270"}
                              />
                              </div>
          </div> 
   
  )
}

export default RadialPopup
