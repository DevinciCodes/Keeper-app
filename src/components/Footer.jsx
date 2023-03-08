import React from "react";

let year = new Date().getFullYear();

function Footer(){
    return <footer><p class>Copyright © {year}</p></footer>
}

export default Footer;