import { Pagination } from "@mantine/core";

import RequestTable from ".";


const Requests = () => {

  return (
    <div>
      <RequestTable />
      <Pagination total={4} my={32} />
    </div>
  );
};

export default Requests;

