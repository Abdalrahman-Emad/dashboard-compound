import { Checkbox, createStyles, Table, ActionIcon } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useNavigate } from "react-router-dom";

import Status from "./Status";

const elements = [
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Pending",
    schoolFees: "Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Success",

    schoolFees: "Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Rejected",

    schoolFees: "No Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Rejected",

    schoolFees: "No Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Rejected",

    schoolFees: "No Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Rejected",

    schoolFees: "No Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
  {
    RequestNo: "#352674733",
    RequestDate: "26 Oct 2022",
    StudentName: "Ahmed Khaled ali",
    gender: "male",
    grade: "KG 2",
    birthDate: "3 Mars 2008",
    status: "Rejected",

    schoolFees: "No Paid",
    year: "2022 - 2023",
    interviewDate: "27 Oct 2022",
  },
];

const RequestTable = () => {
  const { classes } = useStyles();
  const navigator = useNavigate();
  const rows = elements.map((element) => (
    <tr className={classes.tableRow} key={element.RequestNo}>
      <td style={{ display: "flex" }}>
        <Checkbox sx={{ marginRight: 8 }} />
        {element.StudentName}
      </td>
      <td>{element.StudentName}</td>
      <td>{element.gender}</td>
      <td>{element.RequestDate}</td>
      <td>{element.grade}</td>
      <td>{element.birthDate}</td>
      <td>
        <Status status={element.status} />
      </td>
      <td>{element.schoolFees}</td>
      <td>
        <ActionIcon
          variant="filled"
          color="orange"
          radius="xl"
          onClick={() => navigator("/admin/studentsInfo")}
        >
          <IconChevronRight size={20} />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <div style={{ overflowX: "auto" }}>
      <Table verticalSpacing="md" className={classes.tableBody}>
        <thead className={classes.tableHeader}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Registered Unit</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Request Date</th>
            <th>Action</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default RequestTable;

const useStyles = createStyles(() => ({
  tableBody: {
    marginTop: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 3px 12px #00000021",
  },
  tableHeader: {
    backgroundColor: "#222",
    padding: "0 16px",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    "& tr th": {
      color: "#fff !important",
    },
  },
  tableRow: {
    borderColor: "#CACACA",
  },
}));
