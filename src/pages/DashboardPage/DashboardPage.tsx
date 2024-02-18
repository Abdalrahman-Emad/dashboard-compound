import { Grid, Paper, Stack, Title } from '@mantine/core';

import {
    IconActivityHeartbeat,
    IconBrandTelegram,
    IconCategory,
    IconExclamationMark,
    IconMail,
    IconRefresh,
    IconBrandStorytel,
    IconHome2,
} from '@tabler/icons';

import BoxWithIcon from './components/BoxWithIcon';
import { BarChart, DoughnutChart, LineChart } from '../../components/Charts';

import SummaryCounter from './components/SummaryCounter';

export const DashboardPage = () => {
    return (
        <Paper radius="md" p="xl" withBorder>
            <Grid justify={'space-between'} mb={100} mt={32}>
                <Grid.Col xs={3}>
                    <BoxWithIcon
                        title="My Community"
                        details="Units"
                        color="#009359"
                        linkColor="#008350"
                        icon={<IconCategory size={60} color="#008350" />}
                    />
                </Grid.Col>
                <Grid.Col xs={3}>
                    <BoxWithIcon
                        title="Facility Management"
                        details="complaints"
                        color="#00B0F3"
                        linkColor="#009EDB"
                        icon={<IconActivityHeartbeat size={60} color="#009EDB" />}
                    />
                </Grid.Col>
                <Grid.Col xs={3}>
                    <BoxWithIcon
                        title="Timeline"
                        details="Posts"
                        color="#EE5C00"
                        linkColor="#D65301"
                        icon={<IconBrandTelegram size={60} color="#D65301" />}
                    />
                </Grid.Col>
                <Grid.Col xs={3}>
                    <BoxWithIcon
                        title="Messaging"
                        details="Announcements"
                        color="#E93160"
                        linkColor="#D02D57"
                        icon={<IconMail size={60} color="#D02D57" />}
                    />
                </Grid.Col>
            </Grid>
            <Stack mt={100}>
                <Title order={5}>facility and management</Title>
                <Grid justify={'space-between'} align="baseline">
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#EE5C00"
                            icon={<IconExclamationMark color="#fff" />}
                            count={8}
                            title="Open Complaints"
                        />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#009359"
                            icon={<IconRefresh color="#fff" />}
                            count={8}
                            title="In progress complaints"
                        />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#009EDB"
                            icon={<IconBrandStorytel color="#fff" />}
                            count={8}
                            title="Open Services"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack mt={24}>
                <Title order={5}>Residents</Title>
                <Grid justify={'space-between'} align="baseline">
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#EE5C00"
                            icon={<IconExclamationMark color="#fff" />}
                            count={8}
                            title="Auth. Request"
                        />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#009359"
                            icon={<IconRefresh color="#fff" />}
                            count={8}
                            title="Auth. Approved"
                        />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#009EDB"
                            icon={<IconBrandStorytel color="#fff" />}
                            count={8}
                            title="Residents"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Stack mt={24}>
                <Title order={5}>Units</Title>
                <Grid justify={'space-between'} align="baseline">
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#EE5C00"
                            icon={<IconHome2 color="#fff" />}
                            count={8}
                            title="Total Units"
                        />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#009359"
                            icon={<IconHome2 color="#fff" />}
                            count={8}
                            title="Registered Units"
                        />
                    </Grid.Col>
                    <Grid.Col xs={4}>
                        <SummaryCounter
                            bgColor="#009EDB"
                            icon={<IconHome2 color="#fff" />}
                            count={8}
                            title="New Unit Requests"
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
            <Grid justify={'space-between'} align="baseline" mt={100}>
                <Grid.Col xs={8}>
                    <LineChart />
                </Grid.Col>
                <Grid.Col xs={4}>
                    <DoughnutChart />
                </Grid.Col>
            </Grid>
            <Grid mb={40} mt={100}>
                <BarChart />
            </Grid>
        </Paper>
    );
};
