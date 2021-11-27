import React from 'react'
import { logo, title } from '../styles/style'

const Logo = () => {

    // const LogoImage = "./logo192.png" //สำหรับเรียกใช้รูปบนเครื่อง
    const logoImage = {
        url: './logo512.png'
    }

    return (
        <div>
            {/*<img src= {LogoImage} width="100" alt="logo" /> //สำหรับเรียกใช้รูปบนเครื่อง */}
            <img stlye ={logo} src={logoImage.url} width="100" alt="logo"/>
        </div>
    )
}

export default Logo
