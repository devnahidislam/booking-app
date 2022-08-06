import useFetch from '../../../hooks/useFetch';
import './propertyList.css';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countbytype');

  const images = [
    'https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
    'https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
  ];

  return (
    <div className="pList">
      {loading ? (
        'Loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} className="pListImg" alt="Hotels" />
                <div className="pListTitle">
                  <h2>{data[i]?.type}</h2>
                  <h5>
                    {data[i]?.count} {data[i]?.type}
                  </h5>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
