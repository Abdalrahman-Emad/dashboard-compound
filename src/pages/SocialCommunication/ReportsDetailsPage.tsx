import { Button, Divider, Grid, Group, Stack, Text, Title, Image, Textarea } from '@mantine/core';

import PageTitle from '../../components/PageTitle';
import PaperBox from '../../components/PaperBox';

const ReportsDetailsPage = () => {
    return (
        <div>
            <PageTitle additionalTitle="Details" />
            <Grid>
                <Grid.Col span={8}>
                    <Stack>
                        <PaperBox>
                            <Group position="right">
                                <Button color="red">Delete</Button>
                            </Group>
                            <Text my={16} size="lg" color="gray">
                                Details
                            </Text>
                            <Stack>
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Title</Title>
                                    <Text>text</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Type</Title>
                                    <Text>private</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Description</Title>
                                    <Text>test test</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Creator</Title>
                                    <Text>mahmoud</Text>
                                </Group>
                            </Stack>
                        </PaperBox>
                        <PaperBox>
                            <Title order={3}>comments</Title>
                            <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
                            <Button>Add comments</Button>
                        </PaperBox>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Stack spacing={32}>
                        <PaperBox>
                            <Title order={3}>Image</Title>
                            <Image src="" mt={16} withPlaceholder height={200} width={'100%'} />
                        </PaperBox>
                    </Stack>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default ReportsDetailsPage;
