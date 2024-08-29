import styles from "./sidebar.module.css"
import { PiChatText } from "react-icons/pi";
import { BsSend, BsPeopleFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import MenuLink from './menuLink/menuLink';



const menuItems = [
    {
        title: "MAIN",
        list: [
            {
                title: "Chat with Nezumi",
                path: "/dashboard/chatWithNezumi",
                icon: <PiChatText />
            },
            {
                title: "Campaign",
                path: "/dashboard/campaign",
                icon: <BsSend />
            },
            {
                title: "Mail",
                path: "/dashboard/mail",
                icon: <IoIosMail />
            },
            {
                title: "Leads",
                path: "/dashboard/leads",
                icon: <BsPeopleFill />
            },
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <CiSettings />
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="/logo.png"  alt="" width="auto" height="30" />
            </div>
            <div className={styles.divider}></div>
            <ul className={styles.list}>
            {menuItems.map((cat) =>(
            <li key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>
                {cat.list.map(item =>(
                    <MenuLink item={item} key={item.title}/>
                ))}
            </li>
        ))}
            </ul>
            <div className={styles.divider}></div>

            <div className={styles.joinCommunity}>
                <img className={styles.communityLogo} src="/community.png" alt="Community Logo" />
                <span className={styles.communityText}>Join Our Community</span>
                <BsSend className={styles.arrowIcon} />
            </div>
            <div className={styles.divider}></div>



            <div className={styles.user}>
                <img className={styles.userImage} src="/user.png" alt="" height="50" width="50" />
                <div className={styles.userDetail}>
                    <span className={styles.userName}>John Doe</span>
                    <span className={styles.userEmail}>johndoe@gmail.com</span>
                </div>
            </div>
            
          </div>
    );
};

export default Sidebar;