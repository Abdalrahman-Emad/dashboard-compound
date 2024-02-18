import { Box, Button, Grid, Stack, TextInput, Text, Group, ActionIcon, Badge } from '@mantine/core';

import PaperBox from '../../components/PaperBox';

import { useLocation } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import { IconX } from '@tabler/icons';

const UserPermissionPage = () => {
    const { state } = useLocation();
    const { element } = state;
    const removeButton = (
        <ActionIcon size="xs" color="gray.1" variant="transparent">
            <IconX size={14} />
        </ActionIcon>
    );

    return (
        <div>
            <PageTitle title="User" additionalTitle="Permission Facility Management" />
            <Grid>
                <Grid.Col span={7}>
                    <PaperBox>
                        <Box component="form">
                            <Stack>
                                <TextInput label="First Name" disabled value={element.firstName} />
                                <TextInput label="Last Name" value={element.lastName} />
                                <TextInput label="Email" value={element.email} />
                                <Box>
                                    <Text my={8}>Service Category</Text>
                                    <Group spacing={8}>
                                        {Array(5)
                                            .fill('')
                                            .map((_, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="filled"
                                                    sx={{ paddingRight: 3 }}
                                                    radius="sm"
                                                    leftSection={removeButton}
                                                >
                                                    AC services
                                                </Badge>
                                            ))}
                                    </Group>
                                </Box>
                                <Box>
                                    <Text my={8}>Request & Permission Category</Text>
                                    <Group spacing={8}>
                                        {Array(4)
                                            .fill('')
                                            .map((_, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="filled"
                                                    sx={{ paddingRight: 3 }}
                                                    radius="sm"
                                                    leftSection={removeButton}
                                                >
                                                    Credit Services
                                                </Badge>
                                            ))}
                                    </Group>
                                </Box>
                                <Box>
                                    <Text my={8}>Issue Category</Text>
                                    <Group spacing={8}>
                                        {Array(4)
                                            .fill('')
                                            .map((_, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="filled"
                                                    sx={{ paddingRight: 3 }}
                                                    radius="sm"
                                                    leftSection={removeButton}
                                                >
                                                    Security Complaints
                                                </Badge>
                                            ))}
                                    </Group>
                                </Box>
                            </Stack>
                                <Button mt={24}>Save</Button>
                        </Box>
                    </PaperBox>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default UserPermissionPage;
