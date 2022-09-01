import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './single.scss';
import Chart from './../../components/charts/Chart';
import Table from './../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h3 className="title">Information</h3>
            <div className="item">
              <img
                className="itemImg"
                src="https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991"
                alt=""
              />

              <div className="details">
                <h3 className="itemTitle">Nahid Islam</h3>

                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mdnahidislam30@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">01788080397</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Nawabganj, Dinajpur.</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 6 Month)" />
          </div>
        </div>
        <div className="bottom">
          <h3 className="title">Last Transections</h3>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Single;
