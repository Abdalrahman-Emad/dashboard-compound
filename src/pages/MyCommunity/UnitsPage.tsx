import { Title,  Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';
import UnitsTable from './components/UnitsTable';
import { useNavigate } from 'react-router-dom';

const UnitsPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Group position="apart">
                <Title order={2} my={24}>
                    Units
                </Title>
                <Group>
                    <Button onClick={()=>{navigate('/dashboard/community/units/add-units')}}>Add Units</Button>
                    <Button>Upload Units</Button>
                    <Button>Export Units</Button>
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
                        <Button style={{backgroundColor:'#5c636a'}} fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
                <UnitsTable />
            </PaperBox>
        </div>
    );
};

export default UnitsPage;
