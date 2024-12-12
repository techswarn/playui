import { useEffect } from 'react'
import sample1 from './../assets/container-sample.jpg'

const Console = () => {
return (
  <div className="container mx-auto">
    <div className="">
      <h4>Sample images</h4>
    </div>
    <div className="flex justify-between">
      <img className="w-1/4 h-1/4" src={sample1} alt="sample1" />
      <img className="w-1/4 h-1/4" src="https://backend.nyc3.digitaloceanspaces.com/sample2.jpg" alt="sample2" />
    </div>
  </div>
)   
}
 
export default Console;