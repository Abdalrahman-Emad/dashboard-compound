import { Title, Select, Grid, TextInput, Button, Group } from '@mantine/core';

import PaperBox from '../../components/PaperBox';
import ResidentsTable from './components/ResidentsTable';
import { IconChevronDown } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

const ResidentsPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Group position='apart'>
                <Title order={2} my={24}>
                    Authentication
                </Title>
                <Group>
                  <Button onClick={()=>navigate("add-resident")}>Add Resident</Button>
                  <Button>Upload Resident</Button>
                  <Button>Export Resident</Button>
                </Group>
            </Group>
            <PaperBox>
                <Grid>
                    <Grid.Col span={2}>
                        <TextInput placeholder="Name" />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <TextInput placeholder="Email" />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <TextInput placeholder="Unit" />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <TextInput placeholder="Mobile" />
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Select
                            rightSection={<IconChevronDown size={14} />}
                            rightSectionWidth={30}
                            styles={{ rightSection: { pointerEvents: 'none' } }}
                            data={['All Members', '2', '3', '4']}
                        />
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Button color="green" fullWidth>
                            Clear
                        </Button>
                    </Grid.Col>
                </Grid>
                <ResidentsTable />
            </PaperBox>
        </div>
    );
};

export default ResidentsPage;
