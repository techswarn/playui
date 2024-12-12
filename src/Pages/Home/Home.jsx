import React, {useState, useEffect} from 'react'
import fetchData from "./../../api/fetch";

export default function Home() {
  const [image, SetImage] = useState()

const postData = async (url, data) => {
  let response = [];

  const req = {
    method: "POST",
    payload: {
        "name": data.name,
        "image": data.image
    },

  };
  try {
    response = await fetchData(url, req);
  } catch (err) {
    console.log("Error: POST /signup failed | " + err);
  }
  console.log(response)
  return response;
  
};

 useEffect(() => {
    console.log("Send request")
    const data = {
        name: "ubuntu-playground2",
        image: image
    }
    if(image) {
        postData("/deploy", data)
    }
 }, [image])

  const handleClick = (value) => {
    console.log(value)
    SetImage(value)
  }
  return (
    <div>
        <div className="container mx-auto h-screen">
            <div className="my-8 text-center">
                <h1 className="text-4xl text-gray-700 font-medium">Container Playground</h1>
            </div>
            <div className="flex w-full  justify-between">
                <div className="w-full h-full mr-2">
                    <div className="text-2xl text-center mb-5">
                        <h2>Select OS image</h2>
                    </div>
                    <div className="flex flex-col items-center my-2.5">
                            <button className="bg-orange-500 mb-7 w-40 h-20" value='ubuntu' type="button" onClick={() => handleClick('ubuntu')}>
                                    <p className='text-xl'>Ubuntu</p>
                            </button>
                            <button className="bg-orange-500 mb-7 w-40 h-20" type="button" onClick={() => handleClick('centos')}>
                                <p className='text-xl'>Centos</p>
                            </button>
                    </div>
                </div>
                <div className="w-full h-full">Console</div>
            </div>
        </div>
    </div>
  )
}
