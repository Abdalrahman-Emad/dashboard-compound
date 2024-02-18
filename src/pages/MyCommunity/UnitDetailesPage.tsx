import { Button, Divider, FileButton, Grid, Group, Image, Stack, Text, Textarea, Title } from "@mantine/core";
import PageTitle from "../../components/PageTitle";
import PaperBox from "../../components/PaperBox";
import { useState } from "react";
import { useLocation } from "react-router-dom";


export default function UnitDetailesPage() {
    const [file, setFile] = useState<File | null>(null);
    const { state } = useLocation();
    const { element } = state;
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
                                    <Title order={6}>ID</Title>
                                    <Text>{element.id}</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Type</Title>
                                    <Text>{element.type}</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>UnitNo</Title>
                                    <Text>{element.unitNo}</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Unit Area</Title>
                                    <Text>{element.unitArea}</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Status</Title>
                                    <Text>{element.status}</Text>
                                </Group>
                                <Divider />
                                <Group position="apart" align="center" p={8}>
                                    <Title order={6}>Owner</Title>
                                    <Text>{element.owner}</Text>
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
  );
}