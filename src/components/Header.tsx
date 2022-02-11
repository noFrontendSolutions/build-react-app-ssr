import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="h-16 pl-8 pr-8 bg-slate-100 flex justify-between items-center">
      <Link to="/">Airbnb</Link>
      <Link to="/Movies">Movies</Link>
    </div>
  )
}
