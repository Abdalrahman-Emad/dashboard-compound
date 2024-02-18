import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { useNavigate } from 'react-router-dom';
import ServiceTable from './components/ServiceTable';

const ServiceCategoriesPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Service
                </Title>
                <Group>
                    <Button onClick={() => navigate('add-discussions')}>Add Service</Button>
                    <Button>upload Service</Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid justify='flex-end' >
                    <Grid.Col span={3}>
                        <TextInput placeholder="Search" type='search' />
                    </Grid.Col>
                </Grid>
                <ServiceTable />
            </PaperBox>
        </div>
    );
};

export default ServiceCategoriesPage;
