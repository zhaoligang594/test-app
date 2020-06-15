//登陆页的基本操作
import LoginMod from './../login/Signin'
//登陆的首页
// import PrivateZone from './privateZone'
//用户的信息维护
import ManageUsers from './ManageUsers'

import UserInfo from './UserInfo'
import EditUserInfo from "./EditUserInfo";
import NotFound from "./../containers/NotFound";
import ManageRoles from './ManageRoles'
import ManageUserGroup from './ManageUserGroup'
import ManageOptStream from './ManageOptStream'
import ManageDepart from './ManageDepart'
import ManageMenus from './ManageMenus'
import EditOptStream from './EditOptStream'
import OptStreamDetail from './OptStreamDetail'


//blog

import StartPage from './blog/StartPage'
import FileNotFound from './blog/FileNotFound'
import TechTalk from './blog/TechTalk'
import AboutAuthor from './blog/AboutAuthor'
import TechAritcle from './blog/TechAritcle'
import AboutSite from './blog/AboutSite'
import Album from './blog/Album'
import CommentSite from './blog/CommentSite'
import BuildSiteResource from './blog/BuildSiteResource'

//back
import PrivateZone from './back/PrivateZone'
import EditTopic from './back/EditTopic'
import UpdateTopic from './back/UpdateTopic'
import CommonSiteManage from './back/CommonSiteManage'
import ImageMagage from './back/ImageMagage'



export default [
  { path: "/", name: "首页", component: StartPage},
  { path: "/tech-talk", name: "首页", component: TechTalk},
  { path: "/about-author", name: "作者", component: AboutAuthor},
  { path: "/about-site", name: "关于本站", component: AboutSite},
  { path: "/tech-article", name: "文章", component: TechAritcle},
  { path: "/album", name: "相册", component: Album},
  { path: "/comment-site", name: "留言板", component: CommentSite},
  { path: "/edit-topic", name: "编辑我们的文章", component: EditTopic,auth:true},
  { path: "/login", name: "登陆页的基本操作", component: LoginMod},
  { path: "/private-zone", name: "个人空间的首页", component: PrivateZone,auth:true},
  { path: "/update-topic", name: "更新文章", component: UpdateTopic,auth:true},
  { path: "/comments-site-manage", name: "留言信息的管理", component: CommonSiteManage,auth:true},
  { path: "/image-manage", name: "照片的管理", component: ImageMagage,auth:true},
  { path: "/build-site", name: "建站资源", component: BuildSiteResource},
  // { path: "/not_found", name: "404", component: FileNotFound},

  { path: "/manage_users", name: "用户管理", component: ManageUsers},
  { path: "/user_info", name: "个人信息", component: UserInfo},
  // { path: "/user_password", name: "密码管理", component: UserInfo},
  { path: "/manage_menus", name: "菜单管理", component: ManageMenus},
  { path: "/manage_roles", name: "角色管理", component: ManageRoles},
  { path: "/manage_user_group", name: "用户组管理", component: ManageUserGroup},
  { path: "/manage_opt_stream", name: "操作流管理", component: ManageOptStream},
  { path: "/manage_depart", name: "部门管理", component: ManageDepart},
  { path: "/edit_user_info", name: "编辑个人的信息", component: EditUserInfo},
  { path: "/not_found", name: "编辑个人的信息", component: NotFound},
  { path: "/edit_opt_stream", name: "编辑操作流", component: EditOptStream},
  { path: "/opt_stream_detail", name: "查看操作流", component: OptStreamDetail},
]