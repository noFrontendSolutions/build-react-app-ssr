import { Link } from "react-router-dom"
type NYborough =
  | "Manhattan"
  | "Brooklyn"
  | "Staten Island"
  | "The Bronx"
  | "Queens"

export const Header = () => {
  return (
    <div className="h-16 pl-8 pr-8 bg-slate-100 flex justify-between items-center">
      <Link to="/">Manhatten</Link>
      <Link to="/brooklyn">Brooklyn</Link>
      <Link to="/staten-island">Staten Island</Link>
      <Link to="/the-bronx">The Bronx</Link>
      <Link to="/queens">Queens</Link>
    </div>
  )
}
