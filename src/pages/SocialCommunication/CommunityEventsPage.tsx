import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import { useNavigate } from 'react-router-dom';
import PaperBox from '../../components/PaperBox';

import EventsTable from './components/EventsTable';


const CommunityEventsPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Group position='apart'>
                <Title order={2} my={24}>
                Events
                </Title>
                <Group>
                  <Button onClick={()=>navigate("add-events")}>Add Events</Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col span={3}>
                        <TextInput placeholder="Type" />
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <TextInput placeholder="Creator" />
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Button color="green" fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
                <EventsTable />
            </PaperBox>
        </div>
    );
};

export default CommunityEventsPage;
