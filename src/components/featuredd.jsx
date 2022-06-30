import React from 'react'
import istyle from "../Layouts/Default/indexStyle.module.css";
import Image from 'next/image';
const featuredd = () => {
  return (
    <div className={istyle.header}>
        <div className={istyle.header_txt}>Bamboo Products</div>
        <ul className={istyle.nav}>
            <li>Chair</li>
            <li className={istyle.active}>Cabinet</li>
            <li>Sofa</li>
            <li>Bench</li>
        </ul>
        <div className={istyle.header_img}>
        <Image src="/images/Rectangle 3.1.png" width={400} height={250}/>
        <Image src="/images/Rectangle 3.2.png" width={400} height={250}/>
        <Image src="/images/Rectangle 3.3.png" width={400} height={250}/>
        </div><hr className={istyle.hr}></hr>
    </div>
  )
};

export default featuredd