import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Sidebar = () => {

  const sidebarOpen = useSelector((store) => store.sidebar.sidebarMenu)

  if(!sidebarOpen) return null

  return (
    <div className="p-5 shadow-lg w-48">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/demo">Demo</Link></li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
         <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};
export default Sidebar;
