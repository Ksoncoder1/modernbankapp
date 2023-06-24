import React from 'react'
import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br 
        className='sm:block hidden'/> in a better few
          easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea 
           commodo consequat Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           commodo consequat..</p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )

export default CardDeal