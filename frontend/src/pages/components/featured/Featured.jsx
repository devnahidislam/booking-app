import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/max500/620029.jpg?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o=" className='featuredImg' alt="Dubai" />
        <div className="featuredTitle">
          <h1>Dubai</h1>
          <h3>642 Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/max500/619676.jpg?k=d6fff74c6fd1f22c63e757d3e0ed79b22ac5986625f3a4abb7564543e8ea62b5&o=" className='featuredImg' alt="Dubai" />
        <div className="featuredTitle">
          <h1>Singapure</h1>
          <h3>287 Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/max500/685535.jpg?k=e2be6eed1575001863411089bf79fd4be8a1d6fc4fb68ee5c865083994a6fe96&o=" className='featuredImg' alt="Dubai" />
        <div className="featuredTitle">
          <h1>Bangkok</h1>
          <h3>459 Properties</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured