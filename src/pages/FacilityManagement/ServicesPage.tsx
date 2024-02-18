import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';
import RequestsTable from './components/RequestsTable';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

const Services = () => {
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    services
                </Title>
                <Group>
                    <Button color="green">Export Summary</Button>
                    <Button color="green">Export Details </Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="ID" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Type" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Unit No" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Status" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Specs" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Owner" />
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
                <RequestsTable />
            </PaperBox>
        </div>
    );
};

export default Services;
