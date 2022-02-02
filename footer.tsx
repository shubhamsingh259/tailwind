/* This is tailwind cod by shubham singh*/

import Image from 'next/image'
import logo from  "../public/logo.jpeg"
    
  
export default function Example() {
    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
            <Image
              className="h-10 w-auto sm:h-11 m-0"
              height={50}
              width={150}
              src={logo}
              alt=""
            />
          <p className="text-gray-500 text-base">
           Making the world a better place through constructing elegant hierarchies.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Softcoplus, Inc. All rights reserved.</p>
          </div>
          </div>
          
          </footer>

      
    )
    
    }
  
  
