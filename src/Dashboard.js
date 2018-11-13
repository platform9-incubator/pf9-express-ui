import React from 'react'
import { Link } from "react-router-dom"

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <li>
          <Link to="/express">Express</Link>
        </li>
        <li>
          <Link to="/builder">Builder</Link>
        </li>
      </div>
    )
  }
}

export default Dashboard
