import React from 'react';
import Logo from '../images/Logo.svg';
import {Link} from  'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../pages/Orphanages-map.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




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

        <Map 
        center = {[-15.8468548,-48.1718399]}
        zoom ={15}
        style={{width:'100%' ,height:'100%'}}
        >

    {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
       
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ2luaG81MDYiLCJhIjoiY2tnY2lzbjkzMDN3bjJzcGUwdndpOG4wdyJ9.xmpy0GmBAdLBynaP4TrEvA`}/>
       
       
        </Map>






         
         <Link to ="" className="create-orphanage" >

        <FiPlus size={32} color="#FFF"/>

         </Link>


        </div>
        


    );

}


export default Orphanages;

