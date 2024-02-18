import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import UserAdministrationTable from './components/UserAdministrationTable';

const UserAdministrationPage = () => {
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Administration View
                </Title>
                <Group>
                    <Button>Add User</Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Search" type="search" />
                    </Grid.Col>
                </Grid>
                <UserAdministrationTable />
            </PaperBox>
        </div>
    );
};

export default UserAdministrationPage;
