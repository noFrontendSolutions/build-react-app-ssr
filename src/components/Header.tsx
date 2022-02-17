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
      <Link to="/airbnb/manhattan">Manhatten</Link>
      <Link to="/airbnb/brooklyn">Brooklyn</Link>
      <Link to="/airbnb/staten-island">Staten Island</Link>
      <Link to="/airbnb/the-bronx">The Bronx</Link>
      <Link to="/airbnb/queens">Queens</Link>
    </div>
  )
}
