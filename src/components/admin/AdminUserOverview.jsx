import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "total_donated",
    headerName: "Donated",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: false,
  },
];

const AdminUserOverview = ({ users }) => {
  return (
    <section className="flex flex-col gap-3">
      <div>
        <p className="bg-gray-100 w-fit px-3 py-1 rounded-md font-bold">
          Total of users: <span className=" font-normal">{users?.length}</span>
        </p>
      </div>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </section>
  );
};

export default AdminUserOverview;
