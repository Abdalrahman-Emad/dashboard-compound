import { Paper } from '@mantine/core';

import RequestTable from './Table/Requests';

export const UsersPage = () => {
    return (
        <Paper radius="md" p="xl" withBorder>
            <RequestTable />
        </Paper>
    );
};
