import './propertyList.css'

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o= " className='pListImg' alt="Hotels" />
        <div className="pListTitle">
          <h2>Hotels</h2>
          <h5>874 Hotels</h5>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" className='pListImg' alt="Apartment" />
        <div className="pListTitle">
          <h2>Apartment</h2>
          <h5>2876 Apartments</h5>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" className='pListImg' alt="Resorts" />
        <div className="pListTitle">
          <h2>Resorts</h2>
          <h5>4794 Resorts</h5>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" className='pListImg' alt="Villas" />
        <div className="pListTitle">
          <h2>Villas</h2>
          <h5>3436 Villas</h5>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" className='pListImg' alt="Cabins" />
        <div className="pListTitle">
          <h2>Cabins</h2>
          <h5>5672 Cabins</h5>
        </div>
      </div>
      <div className="pListItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/349028.webp?k=3a1163fced4ff96ee361d90a70ff20e66cbb37cfd3414d5f79f6f2a24881d420&o=" className='pListImg' alt="Glamping" />
        <div className="pListTitle">
          <h2>Glamping</h2>
          <h5>68741 Glamping</h5>
        </div>
      </div>
    </div>
  )
}

export default PropertyList