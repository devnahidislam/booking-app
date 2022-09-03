// Temporary users data
export const userColumns = [
  // { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avata.gif"}
            alt="Avatar"
            className="cellImg"
          />
          <span>{params.row.username}</span>
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'country', headerName: 'Country', width: 100 },
  { field: 'city', headerName: 'City', width: 100 },
  { field: 'phone', headerName: 'Phone', width: 150 },
];

export const userRows = [
  {
    id: 1,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 24,
  },
  {
    id: 2,
    username: 'jahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'passive',
    email: 'jahid@gmail.com',
    age: 25,
  },
  {
    id: 3,
    username: 'robi',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 30,
  },
  {
    id: 4,
    username: 'shemuli',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 25,
  },
  {
    id: 5,
    username: 'rana',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'passive',
    email: 'nahid@gmail.com',
    age: 35,
  },
  {
    id: 6,
    username: 'rani',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 22,
  },
  {
    id: 7,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 20,
  },
  {
    id: 8,
    username: 'tuhin',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'passive',
    email: 'nahid@gmail.com',
    age: 16,
  },
  {
    id: 9,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 24,
  },
  {
    id: 10,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 24,
  },
  {
    id: 11,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 24,
  },
  {
    id: 12,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 24,
  },
  {
    id: 13,
    username: 'nahid',
    img: 'https://ik.imagekit.io/nahidislam/My_Image/nahid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651245820991',
    status: 'active',
    email: 'nahid@gmail.com',
    age: 24,
  },
];
