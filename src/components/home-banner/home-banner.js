import './home-banner.scss'
import proJects from '../../assets/projects.png'
import moBility from '../../assets/mobility.png'
import parKing from '../../assets/parking.png'
import enVironment from '../../assets/environment.png'
import eNergy from '../../assets/energy.png'
import heaLth from '../../assets/health.png'
import fooD from '../../assets/food.png'
import viZ from '../../assets/viz.png'
import maP from '../../assets/map.png'
import mabrowze from '../../assets/browse.png'

const HomeBanner = _props => {
  return (
    <home-banner>
      <div className="banner-background">
        <ul>
          <li><img className="browse" src={mabrowze}/></li>
          <li><a href={`https://www.${window.BASE_URL}/about/smart-city-projects`}><img className="projects" src={proJects}/></a></li>
          <li><a href="/?q=transportation&amp;facets%5Bkeywords%5D%5B%5D=Transportation"><img className="mobility" src={moBility}/></a></li>
          <li><a href="/?q=parking"><img className="parking" src={parKing}/></a></li>
          <li><a href="/?q=environment"><img className="environment" src={enVironment}/></a></li>
          <li><a href="/?q=energy"><img className="energy" src={eNergy}/></a></li>
          <li><a href="/?q=health"><img className="health" src={heaLth}/></a></li>
          <li><a href="/?q=food"><img className="food" src={fooD}/></a></li>
          <li><a href="/?q=&facets%5Bkeywords%5D%5B%5D=visualized-datasets&apiAccessible=false"><img className="viz" src={viZ}/></a></li> 
          <li><a href={`https://www.${window.BASE_URL}/tools/datasets-curated-for-visualization`}><img className="map" src={maP}/></a></li>  
        </ul>
      </div>
    </home-banner>
  )
}

export default HomeBanner

