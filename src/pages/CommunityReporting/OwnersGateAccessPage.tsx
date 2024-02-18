import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';
import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';
import VisitorGateAccessTable from './components/OwnersGateAccessTable';

const OwnersGateAccessPage = () => {
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                Owners Gate Access 
                </Title>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Name" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Unit Name" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Gate" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="All" />
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
                <VisitorGateAccessTable />

            </PaperBox>
        </div>
    );
};

export default OwnersGateAccessPage;
