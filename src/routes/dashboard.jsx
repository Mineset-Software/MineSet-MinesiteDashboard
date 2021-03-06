// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/dataentry",
    sidebarName: "Data Entry",
    navbarName: "DataEntry",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/visualanalysis",
    sidebarName: "Visual Analysis",
    navbarName: "Visual Analysis",
    icon: "Person",
    component: TableList
  },
  {
    path: "/prediction",
    sidebarName: "Prediction",
    navbarName: "Prediction",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/report",
    sidebarName: "Report Generation",
    navbarName: "Report Generation",
    icon: LibraryBooks,
    component: Icons
  },
  {
    path: "/certificate",
    sidebarName: "Certification",
    navbarName: "Certification",
    icon: LibraryBooks,
    component: Maps
  },
  // {
  //   path: "/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   sidebarName: "Upgrade To PRO",
  //   navbarName: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
