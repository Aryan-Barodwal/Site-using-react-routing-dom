import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import image from "../assets/images.png"

// import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

// import { useLoaderData } from 'react-router-dom';


function Github() {
  // const data = useLoaderData();
  // const params = useParams(); this is just a use Params!!!!

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/user/Aryan-Barodwal')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])

  return (
    <>
      {/* <div className='user'>There is a user and its name is {params.username}</div> */}
      <div className='github my-4'>
        <div className='AllMainpart'>
          <h1 className='text-center m-4 bg-gray-600 p-4 text-gray-50 rounded-xl'>
            GitHub Account
          </h1>

          <div className="imageAndTexts w-[28%] mt-5 mx-auto flex justify-center gap-7 items-center border border-slate-400 rounded-xl p-2 ">
            <div className='imager bg-slate-400'>
              <img className='bg-slate-400' width={90} src={image} alt="11" />
            </div>
            <div className='Alltexts text-base font-medium flex flex-col gap-[0.15rem]'>
              <h2 className=''>{data.name}</h2>

              <h2 className=''><span><p>{data.bio}</p></span></h2>
              <TypeAnimation
                  sequence={[
                    "Front End Dev",
                    1000,
                    "UI Developer",
                    1000,
                    "Reactjs Developer",
                    1000,

                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: 'medium' , color:'black'}}
                  repeat={Infinity}
                />

              <h2 className=''>{data.node_id}</h2>
              <h2 className=''>{data.created_at}</h2>
              <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                Sign in with Github
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/Aryan-Barodwal');
//   return response.json();

// }