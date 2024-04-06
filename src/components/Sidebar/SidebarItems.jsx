import Create from './CreatePost'
import Home from './Home'
import Notifications from './Notification'
import Profile from './ProfileLink'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
    <Home/>
    <Search/>
    <Notifications/>
    <Create/>
    <Profile/>
    </>
  )
}

export default SidebarItems


// const sidebarItems= [
//     {
//       icon: <AiFillHome size = {25}/>,
//       text: "Home",
//       link: "/",
//      },
//      {
//       icon: <SearchLogo/>,
//       text: "Search",
//      },
//      {
//       icon: <NotificationsLogo/>,
//       text: "Notifications",
//      },
//      {
//       icon: <CreatePostLogo/>,
//       text: "Create",
//      },
//      {
//       icon: <Avatar size ={"sm"} name = "Abdul Usman" src = '/profilepic.png'/>,
//       text: "Profile",
//       link: "/asaprogrammer",
//      }
//     ]