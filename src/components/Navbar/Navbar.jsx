import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home Examples</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Posts</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Image post</a></li>
            <li><a class="dropdown-item" href="#">Gallery post</a></li>
            <li><a class="dropdown-item" href="#">video post</a></li>
            <li><a class="dropdown-item" href="#">Audio post</a></li>
            <li><a class="dropdown-item" href="#">Post Wuth Sidebar</a></li>
            <li><a class="dropdown-item" href="#">404 Error Page</a></li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  >About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  >Contact me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  >Purchase !</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar