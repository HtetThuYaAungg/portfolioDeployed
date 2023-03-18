import React from 'react'

const Radial = ({text1,text2,color,className1,perc}) => {
  return (
    <div>
         <div className={className1}>
                    
                    <div className="flex  items-center justify-center -m-7 overflow-hidden bg-white  rounded-full">
                      
                      <svg className=" w-28 h-28 transform translate-x- translate-y-" >
                      
                    <circle
                      className="text-gray-400"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="46"
                      cx="56"
                      cy="56"
                      />
                    <circle
                      className={color}
                      strokeWidth="10"
                      strokeDasharray={perc}
                      strokeDashoffset="100"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="46"
                      cx="56"
                      cy="56"
                    />
                 
                  </svg>
                  
                    </div>
              <span className=" text-2xl text-green-900 relative right-12">{text1}</span>
              <p className= {`${color} relative left-3 font-bold sm:text-xl`}>{text2}</p>
      
                
                </div>
    </div>
  )
}

export default Radial
