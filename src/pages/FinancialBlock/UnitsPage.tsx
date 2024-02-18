import { Title, Grid, TextInput,  Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import UnitsTable from './components/UnitsTable';


const Units = () => {
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
                        <TextInput placeholder="Search" type='search' />
                    </Grid.Col>
                </Grid>
                <UnitsTable />
            </PaperBox>
        </div>
    );
};

export default Units;
