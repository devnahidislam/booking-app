import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from './../../hooks/useFetch';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { axios } from 'axios';

const Datatable = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  // const [data, setData] = useState(userRows);
  const [list, setList] = useState("");
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(`${path}/${user._id}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    console.log(`${path}/${id}`);
    try {
      // await axios.delete(`/${path}/${id}`);
      await axios.delete(`localhost:5000/api/users/${id}`)
        .then(() => this.setState({ status: 'Delete successful' }));
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/:single">
              <div className="viewBtn">View</div>
            </Link>
            <div
              className="deleteBtn"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Users List
        <Link to="/users/new">
          <button>Add New User</button>
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={list}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable;
