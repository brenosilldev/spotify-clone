import Topbar from "@/components/Topbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const Home = () => {
	return (
		<div className='h-screen'>
			<Topbar />
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={20} minSize={20}>One</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={80} minSize={80}>Two</ResizablePanel>
				<ResizableHandle />
				<ResizablePanel defaultSize={25} minSize={20}>Therre</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	)
}

export default Home;
