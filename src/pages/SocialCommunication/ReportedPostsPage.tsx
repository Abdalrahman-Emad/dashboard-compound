import { Title, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import ReportTable from './components/ReportTable';


const ReportedPostsPage = () => {
    return (
        <div>
            <Group position='apart'>
                <Title order={2} my={24}>
                Report
                </Title>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col span={3}>
                        <TextInput placeholder="Type" />
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Button color="green" fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
                <ReportTable />
            </PaperBox>
        </div>
    );
};

export default ReportedPostsPage;
