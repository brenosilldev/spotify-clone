import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	
	const isMobile = false
	return (
		<div className='h-screen bg-black text-white flex flex-col'> 
			
			<ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden ">
				<ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 20} maxSize={30}>
					<LeftSidebar />
				</ResizablePanel>
				
				<ResizablePanel defaultSize={isMobile ? 80 : 60} >
					
					<Outlet />
				</ResizablePanel>
			
				<ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
					<RightSidebar/>					
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}

export default MainLayout;
