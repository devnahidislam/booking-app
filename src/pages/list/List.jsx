import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import './list.css';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import SearchItem from '../components/searchItem/SearchItem';

const List = () => {
  
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options)

  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWraper">
          <div className="listSearch">
            <h1 className='lsTitle'>List Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" value={ destination } />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span
                  onClick={() => setOpenDate(!openDate)}
              > {`${format(date[0].startDate, 'dd/MM/yy')} To ${format(
                  date[0].endDate,
                  'dd/MM/yy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate = {new Date()}
                    ranges={date}
                    className="datePicker"
                  />
                )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Option</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>Per Night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>Per Night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
              
            </div>
            <button>Search</button>
          </div>


          <div className="listResults">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List