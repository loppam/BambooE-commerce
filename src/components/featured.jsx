import React from 'react'
import istyle from "../Layouts/Default/indexStyle.module.css";
import Image from 'next/image';
const featured = () => {
  return (
    <div className={istyle.featured}>
      <div className={istyle.head}>Featured Products</div>
        <div className={istyle.position}>
          <div className={istyle.flex}>
          <div className={istyle.row1}>
          <Image src="/images/Product 1.png" width={396} height={510}/>
          <Image src="/images/Product 4.png" height={510} width={396} />
          <Image src="/images/Product 7.png" height={510} width={396} />
          <Image src="/images/Product-10.png" height={510} width={396} />
          </div>
          <div className={istyle.row2}>
          <Image src="/images/Product 2.png" height={510} width={396} />
          <Image src="/images/Product 5.png" height={510} width={396} />
          <Image src="/images/Product 8.png" height={510} width={396} />
          <Image src="/images/Product 11.png" height={510} width={396} />
          </div>
          <div className={istyle.row1}>
          <Image src="/images/Product 6.png" height={510} width={396} />
          <Image src="/images/Product 3.png" height={510} width={396} />
          <Image src="/images/Product 9.png" height={510} width={396} />
          <Image src="/images/Product 12.png" height={510} width={396} />
          </div>
        </div>
      </div>
        <a className={istyle.featuredBtn} href='#'>load more</a>
    </div>
  )
};

export default featured