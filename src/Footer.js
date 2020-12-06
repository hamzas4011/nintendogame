import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="main-footer">
        <div className="container">
            <div className="row">


                  <div classname="col-1">
                      <h4>Informasjon</h4>
                        <br/>
                      <ul className="list-unstyled">
                         <li>FAQ</li>
                         <li>Søk</li>
                         <li>Blog</li>
                         </ul>
                  </div>

                         <hr/>
                        <div className="col-1">
                          <h4>Nintendo</h4>
                             <br/>
                          <ul className="list-unstyled">
                               <li>Om</li>
                               <li>Karriere </li>
                          </ul>

                        </div>
                         <hr/>
                        <div className="col-1">
                        <h4>Kontakt</h4>
                           <br/>
                          <ul className="list-unstyled">
                               <li>22232141</li>
                               <li>nintendo@hotmail.com</li>
                          </ul>

                        </div>

            </div>
        </div>

       </div>

    );

export default Footer;