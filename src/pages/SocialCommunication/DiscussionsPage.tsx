import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import DiscussionsTable from './components/DiscussionsTable';

import { useNavigate } from 'react-router-dom';

const DiscussionsPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Group position='apart'>
                <Title order={2} my={24}>
                Discussions
                </Title>
                <Group>
                  <Button onClick={()=>navigate("add-discussions")}>Add Discussions</Button>
                  <Button>My Posts</Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col span={3}>
                        <TextInput placeholder="Title" />
                    </Grid.Col>
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
                <DiscussionsTable />
            </PaperBox>
        </div>
    );
};

export default DiscussionsPage;
