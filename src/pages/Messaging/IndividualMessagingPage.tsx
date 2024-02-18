import UserChat from './components/UserChat';
import { Container, Grid } from '@mantine/core';
import UsersChatList from './components/UsersChatList';
import IndividualChat from './IndividualChat';
import { Outlet } from 'react-router-dom';

const IndividualMessagingPage = () => {
    return (
        <Container size={'xl'}>
            <Grid>
                <Grid.Col span={4}>
                    <UsersChatList />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Outlet />
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default IndividualMessagingPage;
