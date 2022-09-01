import { useState } from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const List = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = [
    {
      id: 1,
      product: 'Thirt',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
      customer: 'Nahid Islam',
      date: '1 March',
      amount: 240,
      method: 'Cash on delivery',
      status: 'Approved',
    },
    {
      id: 2,
      product: 'Pant',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20201002_171423_ntXHgfxqQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652866343232',
      customer: 'Jahid Hasan',
      date: '8 March',
      amount: 647,
      method: 'Cash on delivery',
      status: 'Approved',
    },
    {
      id: 3,
      product: 'Samsung',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20200913_174125_Q-C3W-LLB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659586622576',
      customer: 'Arif Khan',
      date: '7 July',
      amount: 658,
      method: 'Cash on delivery',
      status: 'Pending',
    },
    {
      id: 4,
      product: 'Smart Phone',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20200913_174125_Q-C3W-LLB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659586622576',
      customer: 'Rubel Khan',
      date: '14 February',
      amount: 473,
      method: 'Cash on delivery',
      status: 'Approved',
    },
    {
      id: 5,
      product: 'Mekup',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
      customer: 'Shemuli',
      date: '20 May',
      amount: 46,
      method: 'Cash on delivery',
      status: 'Pending',
    },
    {
      id: 6,
      product: 'Phone',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
      customer: 'Meghla',
      date: '9 August',
      amount: 57,
      method: 'Cash on delivery',
      status: 'Approved',
    },
    {
      id: 7,
      product: 'Cloth',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20200913_174125_Q-C3W-LLB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659586622576',
      customer: 'Masum',
      date: '1 March',
      amount: 575,
      method: 'Cash on delivery',
      status: 'Pending',
    },
    {
      id: 8,
      product: 'Food',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
      customer: 'Jubair',
      date: '1 May',
      amount: 100,
      method: 'Cash on delivery',
      status: 'Approved',
    },
    {
      id: 9,
      product: 'Remote',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20200913_174125_Q-C3W-LLB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659586622576',
      customer: 'Joy',
      date: '1 April',
      amount: 240,
      method: 'Cash on delivery',
      status: 'Pending',
    },
    {
      id: 10,
      product: 'Frut',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
      customer: 'Robiul Islam',
      date: '1 March',
      amount: 140,
      method: 'Cash on delivery',
      status: 'Approved',
    },
    {
      id: 11,
      product: 'Thirt',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20200913_174125_Q-C3W-LLB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659586622576',
      customer: 'Juli',
      date: '1 March',
      amount: 240,
      method: 'Cash on delivery',
      status: 'Pending',
    },
    {
      id: 12,
      product: 'Keyboard',
      img: 'https://ik.imagekit.io/nahidislam/My_Image/20200913_174125_Q-C3W-LLB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1659586622576',
      customer: 'Juli',
      date: '1 March',
      amount: 145,
      method: 'Cash on delivery',
      status: 'Pending',
    },
  ];
  return (
    <Paper>
      <TableContainer className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking Id</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWraper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">${row.amount}</TableCell>
                  <TableCell className="tableCell">{row.method}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        // sx={{
        //   '.MuiTablePagination-toolbar': {
        //     backgroundColor: 'rgb(126, 126, 126)',
        //     color: '#f1f2f6',
        //   },
        // }}
      />
    </Paper>
  );
};

export default List;
