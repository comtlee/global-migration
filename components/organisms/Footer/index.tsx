import React from "react";
import Link from "next/link";

interface FamilySite {
    name: string;
    url: string;
}

interface FooterDataType {
    familySites: FamilySite[];
    address: string;
    ceo: string;
}

const FooterData: FooterDataType = {
    ceo: 'Inwook Yeom',
    address: 'Business Registration No. (UEN) : 202124480N<br>Email : contact@smartscore.global 111 Somerset Road, #06-07S, 111 Somerset, Singapore<br><br>  Copyright 2023. SMARTSCORE Inc. all rights reserved.',
    familySites: [
        { name: 'Majesty', url: '' },
        { name: 'Zestaim', url: '' },
        { name: 'Mckayson', url: '' },
        { name: 'GMK', url: '' },
        { name: 'King\'s Rock', url: '' },
    ],


};



const Footer: React.FC = () => {
   return (
       <footer className="footer">
           <div className="footer-wrap">
               <div className="footer-logo-box">
                   <Link href="" className="footer-logo">
                        <img src="https://image.smartscore.kr/smartscore_gloabl/logo/smartscore_global_logo_black.svg"  alt="footer - service logo" className="i-color-ffffff"/>
                   </Link>
               </div>
               <div className="footer-aside-box">
                   <address>
                       CEO : {FooterData.ceo} <br/>
                       <div dangerouslySetInnerHTML={{ __html: FooterData.address }}></div>
                   </address>


                   <ul className="footer-family">
                       {
                           FooterData.familySites.map((site, index) => {
                               return (
                                   <li key={index}>
                                       <Link href={site.url}>{site.name}</Link>
                                   </li>
                               )
                           })}
                   </ul>
               </div>
           </div>
       </footer>
   )
}

export default Footer