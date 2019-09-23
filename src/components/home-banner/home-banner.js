import './home-banner.scss'
import bannerOverlay from '../../assets/home-banner-overlay.png'

const HomeBanner = _props => {
  return (
    <home-banner>
      <div className="banner-background">
        <img src={bannerOverlay} className="banner-overlay" useMap="#bannerMap" />
        <map name="bannerMap">
          <area shape="rect" coords="233,52,354,150" href="/?q=transportation&amp;facets%5Bkeywords%5D%5B%5D=Transportation&amp;apiAccessible=false" />
          <area shape="rect" coords="537,29,635,146" href="/?q=environment&amp;sort=name_asc&amp;apiAccessible=false" />
          <area shape="rect" coords="676,53,776,142" href="/?q=energy&amp;sort=last_mod&amp;apiAccessible=false" />
          <area shape="rect" coords="813,48,925,144" href="/?q=health&amp;apiAccessible=false" />
          <area shape="rect" coords="955,40,1053,144" href="/?q=food&amp;apiAccessible=false" />
          <area shape="rect" coords="386,37,490,149" href="/?q=parking&amp;apiAccessible=false" />
          <area shape="rect" coords="95,46,184,154" href="/about/smart-city-projects" />
        </map>
      </div>
    </home-banner>
  )
}

export default HomeBanner

