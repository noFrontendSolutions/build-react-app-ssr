import { Header } from "./components/Header"

const Layout:React.FC = ({children}) => {
  return (
  <>
    <Header/>
    <div className="p-8 flex flex-col items-center">
    {children}
    </div>    
  </>
)}

export default Layout