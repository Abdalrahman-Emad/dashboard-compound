import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { DatePicker } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons';

import ServiceOperationReportTable from './components/ServiceOperationReportTable';

const ServiceOperationReportPage = () => {
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Service Operation Report
                </Title>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Category" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Status" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Rate" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="service" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Unit" />
                    </Grid.Col>
                    <Grid.Col xs={1.7}>
                        <TextInput placeholder="Technician" />
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
                <ServiceOperationReportTable />
            </PaperBox>
        </div>
    );
};

export default ServiceOperationReportPage;
