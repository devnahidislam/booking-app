import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './reserve.css';
import useFetch from './../hooks/useFetch';
import { useState, useContext } from 'react';
import { SearchContext } from './../context/SearchContext';
import { axios } from 'axios';
import { AuthContext } from '../context/AuthContext';

const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { date } = useContext(SearchContext);

  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const bookeDates = [];
    
    while (date <= end) {
      bookeDates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return bookeDates;
  };
  const alldates = getDateInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const { user } = useContext(AuthContext);
  
  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map(rid => {
          const res = axios.put(`/rooms/availablity/${user._id}/${rid}`, {
            date: alldates,
          });
          return res.data;
        })
        );
    } catch (error) {
      console.log(error);
      }
    };
    console.log(selectedRooms);
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />{' '}
        <span>Select Your Rooms: </span>
        {loading
          ? 'Loading'
          : data.map((item, id) => (
              <div className="rItem" key={id}>
                <div className="rItemInfo">
                  <div className="rTitle">{item.title}</div>
                  <div className="rDesc">{item.desc}</div>
                  <div className="rMax">
                    Max people:<b> {item.maxPeople}</b>
                  </div>
                  <div className="rPrice">
                    Room's price per Night: ${item.price}
                  </div>
                </div>
                <div className="rSelectRoom">
                  {item.roomNumbers.map((roomNumber, id) => (
                    <div className="room" key={id}>
                      <label>{roomNumber.number}</label>
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelect}
                        disabled={!isAvailable(roomNumber)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        <button onClick={handleReserve} className="rButton">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Reserve;
