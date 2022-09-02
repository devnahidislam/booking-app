import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './../../hooks/useFetch';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Datatable = () => {
  // const [data, setData] = useState(userRows);
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(`/users/${user._id}`);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
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
              onClick={() => handleDelete(params.row.id)}
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
        rows={data}
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
