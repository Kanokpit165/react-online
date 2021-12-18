import React from 'react'
 import {Button} from "react-bootstrap"
 import { AiFillGithub } from "react-icons/ai";

 const ContactUs = () => {
     const name = "Peerawit Wisitsurawong"

     return (
         <div className="container">
             <h1>Contact Us</h1>
             <h3>{name}</h3>
             <p>- ชื่อ กนกพิชญ์ รัตนาศิริภิรมย์ นักศึกษาชั้นปีที่ 4 คณะ IT สาขา MT ในอนาคตอยากทำงานเป็น Graphic Design</p>
             <p>- มีงานอดิเรก คือ การเล่นดนตรี เป็นมือเบสประจำวง Horny Boys วงดนตรีของสถาบัน</p>
             <p>- Happy</p>
             <p><b>For my github visit link below</b></p>
             <Button variant="outline-primary" href="https://github.com/Kanokpit165"><h3><AiFillGithub/>Click here</h3></Button>
             <p><b>Contact me : </b>ra.kanokpit_st@tni.ac.th</p>
         </div>
     )
 }

 export default ContactUs