import { Text, Stack, Title, Box, Group } from '@mantine/core';
import { IconArrowNarrowRight } from '@tabler/icons';

type Props = {
    color?: string;
    linkColor: string;
    title: string;
    details: string;
    link?: string;
    icon: any
};

const BoxWithIcon = ({ color = '#00425A', title, details, linkColor , icon }: Props) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 100,
                borderRadius: 4,
                backgroundColor: color,
                color: '#fff',
                position: 'relative',
                zIndex: 100,
            }}
        >
            <Stack px={16} spacing={8}>
                <Box p={8}>
                    <Title order={4} mb={16}>
                        {title}
                    </Title>
                    <Text>{details}</Text>
                </Box>
            </Stack>
            <Box sx={{ width: '100%', backgroundColor: linkColor, cursor: 'pointer' }}>
                <Group align="center" position="center" p={2} spacing={4}>
                    <Text>More info</Text>
                    <IconArrowNarrowRight />
                </Group>
            </Box>
            <Box sx={{ position: 'absolute', right: 0, top: 20 }}>
                {icon}
            </Box>
        </Box>
    );
};

export default BoxWithIcon;
