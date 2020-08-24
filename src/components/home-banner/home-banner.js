import './home-banner.scss'
import projects from '../../assets/projects.png'
import mobility from '../../assets/mobility.png'
import parking from '../../assets/parking.png'
import environment from '../../assets/environment.png'
import energy from '../../assets/energy.png'
import health from '../../assets/health.png'
import food from '../../assets/food.png'
import viz from '../../assets/viz.png'
import map from '../../assets/map.png'
import browse from '../../assets/browse.png'

const HomeBanner = _props => {
  return (
    <home-banner>
      <div className="banner-background">
        <ul>
          <li><img className="browse" src={browse}/></li>
          <li><a href={`https://www.${window.BASE_URL}/about/smart-city-projects`}><img className="projects" src={projects}/></a></li>
          <li><a href="/?q=transportation&amp;facets%5Bkeywords%5D%5B%5D=Transportation"><img className="mobility" src={mobility}/></a></li>
          <li><a href="/?q=parking"><img className="parking" src={parking}/></a></li>
          <li><a href="/?q=environment"><img className="environment" src={environment}/></a></li>
          <li><a href="/?q=energy"><img className="energy" src={energy}/></a></li>
          <li><a href="/?q=health"><img className="health" src={health}/></a></li>
          <li><a href="/?q=food"><img className="food" src={food}/></a></li>
          <li><a href="/?q=&facets%5Bkeywords%5D%5B%5D=visualized-datasets&apiAccessible=false"><img className="viz" src={viz}/></a></li>
          <li><a href={`https://www.${window.BASE_URL}/tools/datasets-curated-for-visualization`}><img className="map" src={map}/></a></li>
        </ul>
      </div>
    </home-banner>
  )
}

export default HomeBanner

