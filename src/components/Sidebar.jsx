import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SelectedTabContext } from '../store/SelectedTab-Context';

const Sidebar = () => {

  const {selectedTab, setSelectedTab} = useContext(SelectedTabContext);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "200px" , height : "100vh"}}>
      <Link to="/post-list" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">SocialMedia</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <Link to={"/post-list"} className={`nav-link text-white ${selectedTab === "Home" && "active"}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <Link to={"/create-post"} className={`nav-link text-white ${selectedTab === "Create Post" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Create Post
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar