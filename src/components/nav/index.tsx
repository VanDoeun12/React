import React from "react";
import "./index.css";


// create use props

interface NavProps {

}
// Create Array object for advance menu
const menubar = [
    {
        id: 1,
        title: "About",
        link: "#"
    },
    {
        id: 2,
        title: "Menu",
        link: "#"
    },
    {
        id: 3,
        title: "Contact",
        link: "#"
    }
]

const Nav: React.FC <NavProps> = (props) => {
    const {  } = props;
    
    return(
        <nav>
            <a href="#" className="logo">Food Website</a>

            <ul>
                {/* Basic Menu */}
                {/* <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li> */}

                {/* Advance Menu */}
                {
                    // Use map function not return
                //    menubar.map( (item) =>(
                //     <li key={item.id}>
                //         <a href={item.link}> {item.title}</a>
                //     </li>
                //    ))

                // Use map function with return
                menubar.map((item) => {
                    const{id, title, link} = item;
                    return(
                        <li key={id}>
                        <a href={link}>{title}</a>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    )
}

export default Nav;