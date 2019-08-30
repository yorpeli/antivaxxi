import React from 'react';

const Loader = ()=>{

    return(
        <div className='container col-4 offset-4'>
            <div className="spinner-box">
            <div className="pulse-container">  
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
            </div>
            </div>
        </div>
    )};

export default Loader;

// <div class="spinner-box">
//   <div class="circle-border">
//     <div class="circle-core"></div>
//   </div>  
// </div>

// <div class="spinner-box">
//   <div class="leo-border-1">
//     <div class="leo-core-1"></div>
//   </div> 
//   <div class="leo-border-2">
//     <div class="leo-core-2"></div>
//   </div> 
// </div>

// <div class="spinner-box">
//   <div class="configure-border-1">  
//     <div class="configure-core"></div>
//   </div>  
//   <div class="configure-border-2">
//     <div class="configure-core"></div>
//   </div> 
// </div>



// <div class="spinner-box">
//   <div class="solar-system">
//     <div class="earth-orbit orbit">
//       <div class="planet earth"></div>
//       <div class="venus-orbit orbit">
//         <div class="planet venus"></div>
//         <div class="mercury-orbit orbit">
//           <div class="planet mercury"></div>
//           <div class="sun"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="spinner-box">
//   <div class="blue-orbit leo">
//   </div>

//   <div class="green-orbit leo">
//   </div>
  
//   <div class="red-orbit leo">
//   </div>
  
//   <div class="white-orbit w1 leo">
//   </div><div class="white-orbit w2 leo">
//   </div><div class="white-orbit w3 leo">
//   </div>
// </div>
