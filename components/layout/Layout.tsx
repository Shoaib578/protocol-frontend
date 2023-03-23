import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>
        <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
       
      </div>

      <center>
        {props.children}

      </center>
      <div className={sidebarOpen == true?"w-3/12 lg:pl-44 xl:pl-44":"w-3/12 lg:pl-44 xl:pl-44 absolute"} >
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
    
      </div>

    
      </div>
  );
};

export default Layout;
