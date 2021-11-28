import React from 'react'
import PropTypes from 'prop-types';
const Footer = ({title,website,address,postcode, isOpen}) =>  {
    // const {title,website,address,postcode} = props;
     const nickname = <p>Art</p>
         return (
             <div>
                 {nickname}
                 <h1 style={styles.title}>{title} &copy; {new Date().getFullYear()}</h1>
                 <p style={{color:'green',fontSize:18}}>{website} {address} {postcode} {isOpen}</p>
                 <p style={styles.title}>Kanokpit Rattanasiripirom</p>
             </div>
                )
            }
            const styles ={
                title : {
                    color: 'blue'
                }
            }
            Footer.propTypes = {
                title: PropTypes.string,
                website: PropTypes.string,
               address: PropTypes.string,
               postcode: PropTypes.number,
               isOpen: PropTypes.bool
           };
export default Footer;