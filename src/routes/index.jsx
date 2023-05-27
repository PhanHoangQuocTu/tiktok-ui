//Components
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"


//Layout
import HeaderOnlyLayout from "~/components/Layout/HeaderOnlyLayout"

//Public Route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/search', component: Search, layout: HeaderOnlyLayout },
]

//Private Route
const privateRoutes = [

]

export { publicRoutes, privateRoutes }