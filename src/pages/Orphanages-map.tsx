import React from 'react';
import Logo from '../images/Logo.svg';
import {Link} from  'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../pages/Orphanages-map.css';
import {Map} from 'react-leaflet';




function Orphanages (){

    return(
        <div id="page-map">

        <aside>


        <header>

        <img src={Logo} alt=""/>

        <h2>Escolha um orfanato no Mapa</h2>
        <p>Muitas crianças estão esperando sua visita</p>



        </header>

        <footer>
            
            
            <strong>Brasília</strong>
            <span>Distrito Federal</span>
            
            
            
            
            </footer>


        </aside>

        <div></div>
         
         <Link to ="" className="create-orphanage" >

        <FiPlus size={32} color="#FFF"/>

         </Link>


        </div>
        


    );

}


export default Orphanages;

