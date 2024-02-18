import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

import AuthenticationTrackingTable from './components/AuthenticationTrackingTable';

const AuthenticationTrackingPage = () => {
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Authentication Tracking
                </Title>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="First Name" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Last Name" />
                    </Grid.Col>

                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Unit" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Email" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Authenticated by" />
                    </Grid.Col>
                    <Grid.Col xs={1}>
                        <Button color="green" fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={3}>
                        <DatePicker placeholder="mm/dd/yy" label="From" icon={<IconCalendar size={16} />} />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <DatePicker placeholder="mm/dd/yy" label="To" icon={<IconCalendar size={16} />} />
                    </Grid.Col>
                </Grid>
                <AuthenticationTrackingTable />
            </PaperBox>
        </div>
    );
};

export default AuthenticationTrackingPage;
