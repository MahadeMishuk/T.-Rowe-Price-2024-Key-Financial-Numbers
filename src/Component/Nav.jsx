import React from 'react'

function Nav() {
  return (
    <div className="flex justify-between items-center p-1 bg-gray-800 text-black">
            <div className="flex items-center scroll-px-10 mx-20">
                <a href='https://www.troweprice.com/personal-investing/index.html'><img src="/images/logo.png" alt="Logo" className="h-20" /> </a>
            </div>


      <div className="flex items-center space-x-10 mx-20">
        <input type="text" placeholder="Search" className="p-1 border border-gray-600 rounded"/>
        <img src="/images/icon.png" alt="Logo" className="h-16" />
      </div>
    </div>
  )
}

export default Nav
