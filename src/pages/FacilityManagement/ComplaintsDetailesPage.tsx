import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import { Button, Divider, FileButton, Grid, Group, Image, Select, Stack, Text, Textarea, Title } from "@mantine/core";
import PaperBox from "../../components/PaperBox";
import { IconChevronDown } from "@tabler/icons";



export default function ComplaintsDetailesPage() {
    const [file, setFile] = useState<File | null>(null);
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
                                    <Text>components</Text>
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
                                    <Title order={6}>Creation Time</Title>
                                    <Text>2002-1-2</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Location</Title>
                                    <Text>Egypt</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Creator</Title>
                                    <Text>mahmoud</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Creator Mobile</Title>
                                    <Text>+12345678</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Unit</Title>
                                    <Text>33fsdfd</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Status</Title>
                                    <Select
                                        rightSection={<IconChevronDown size={14} />}
                                        rightSectionWidth={30}
                                        styles={{ rightSection: { pointerEvents: 'none' } }}
                                        data={['open', 're-open', 'close']}
                                        size="md"
                                    />
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Priority</Title>
                                    <Text>test</Text>
                                </Group>
                                <Button fullWidth={false}>update</Button>
                            </Stack>
                        </PaperBox>
                        <PaperBox>
                            <Title my={16} order={4}>
                                Communicate With the user
                            </Title>
                            <Group mb={16}>
                                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                                    {(props) => <Button {...props}>Upload image</Button>}
                                </FileButton>
                            </Group>
                            {file && (
                                <Text size="sm" align="center" mt="sm">
                                    Picked file: {file.name}
                                </Text>
                            )}

                            <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
                            <Button>Update</Button>
                        </PaperBox>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Stack spacing={32}>
                        <PaperBox>
                            <Title order={3}>Image</Title>
                            <Image src="" mt={16} withPlaceholder height={200} width={'100%'} />
                        </PaperBox>
                        <PaperBox>
                            <Textarea placeholder="Your comment" mb={16} withAsterisk minRows={4} maxRows={6} />
                            <Button>Add comments</Button>
                        </PaperBox>
                    </Stack>
                </Grid.Col>
            </Grid>
        </div>
  )
}
