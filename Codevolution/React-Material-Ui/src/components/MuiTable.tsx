import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from "@mui/material";

function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Pietrek",
    last_name: "Esel",
    email: "pesel0@illinois.edu",
    gender: "Male",
    ip_address: "201.207.91.175"
  },
  {
    id: 2,
    first_name: "Seana",
    last_name: "Youell",
    email: "syouell1@wikipedia.org",
    gender: "Female",
    ip_address: "55.250.220.105"
  },
  {
    id: 3,
    first_name: "Pascal",
    last_name: "Lindholm",
    email: "plindholm2@addtoany.com",
    gender: "Male",
    ip_address: "114.125.168.200"
  },
  {
    id: 4,
    first_name: "Jo",
    last_name: "Aubert",
    email: "jaubert3@dagondesign.com",
    gender: "Male",
    ip_address: "48.232.215.111"
  },
  {
    id: 5,
    first_name: "Lynna",
    last_name: "Crosson",
    email: "lcrosson4@irs.gov",
    gender: "Female",
    ip_address: "238.188.107.95"
  },
  {
    id: 6,
    first_name: "Sanders",
    last_name: "Halley",
    email: "shalley5@google.es",
    gender: "Male",
    ip_address: "35.213.118.157"
  },
  {
    id: 7,
    first_name: "Donna",
    last_name: "Merryweather",
    email: "dmerryweather6@github.io",
    gender: "Female",
    ip_address: "226.59.11.131"
  },
  {
    id: 8,
    first_name: "Annadiana",
    last_name: "Cay",
    email: "acay7@census.gov",
    gender: "Female",
    ip_address: "255.16.92.139"
  },
  {
    id: 9,
    first_name: "Cristen",
    last_name: "Cunnane",
    email: "ccunnane8@tumblr.com",
    gender: "Female",
    ip_address: "185.7.162.43"
  },
  {
    id: 10,
    first_name: "Richy",
    last_name: "Ovise",
    email: "rovise9@xinhuanet.com",
    gender: "Male",
    ip_address: "84.199.114.136"
  }
];
