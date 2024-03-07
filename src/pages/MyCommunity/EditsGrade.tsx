import React, { useState } from 'react';
import { Container, Grid, Stack, TextInput, Select, Button } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PageTitle from '../../components/PageTitle';

const EditsGrade: React.FC = () => {
    const [gradeName, setGradeName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [numOfBuildings, setNumOfBuildings] = useState('');

    const handleSubmit = () => {
        // Handle form submission logic here
    };

    return (
        <Container size="xl">
            <PageTitle title="Edits Grade" />
            <Grid>
                <Grid.Col span={12}>
                    <PaperBox>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing="md">
                                <TextInput
                                    label="Grade Name"
                                    value={gradeName}
                                    onChange={(e) => setGradeName(e.target.value)}
                                />
                                <Select
                                    data={[
                                        { label: 'Blue blue', value: 'Blue blue' },
                                        { label: 'HQ', value: 'Hq' },
                                    ]}
                                    value={projectName}
                                    onChange={(value) => setProjectName(value as string)}
                                    label="Project"
                                    placeholder="Select Project"
                                />
                                <TextInput
                                    label="Number of Buildings"
                                    value={numOfBuildings}
                                    onChange={(e) => setNumOfBuildings(e.target.value)}
                                    type='number'
                                />
                                <Button type="submit" color="teal">
                                    Update
                                </Button>
                            </Stack>
                        </form>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default EditsGrade;
