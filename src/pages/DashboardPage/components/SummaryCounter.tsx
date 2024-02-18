import { Box, Group, Paper, Stack, Text } from '@mantine/core';

type Props = {
    icon: any;
    title: string;
    count: number;
    bgColor?: string;
};

const SummaryCounter = ({ count, icon, title, bgColor }: Props) => {
    return (
        <Paper p={0} shadow="md" >
            <Group>
                <Box sx={{ backgroundColor: bgColor, borderRadius: '8px 0 0 8px', padding: 16 }}>{icon}</Box>
                <Stack spacing={4}>
                    <Text>{title}</Text>
                    <Text>{count}</Text>
                </Stack>
            </Group>
        </Paper>
    );
};

export default SummaryCounter;
