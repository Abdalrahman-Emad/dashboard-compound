import { Avatar, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

type Props = {
    id: string;
    name: string;
    message?: string;
    img?: string | null;
    chat?: boolean;
};

const UserChat = ({ name, img = null, message, id, chat = false }: Props) => {
    const navigate = useNavigate();
    return (
        <UnstyledButton disabled={chat} onClick={() => navigate(`${id}`, { state: { name: name, img: img } })}>
            <Group spacing={16} align="center">
                <Avatar size={'lg'} radius="xl" src={img} alt="it's me" />
                <Box sx={{ width: '75%' }}>
                    <Group position="apart">
                        <Text weight={'bold'}>{name}</Text>
                        {chat ? <Text color="gray">{new Date().toUTCString()}</Text> : ''}
                    </Group>
                    <Text color="gray" lineClamp={!chat ? 1 : 0}>
                        {message}
                    </Text>
                </Box>
            </Group>
        </UnstyledButton>
    );
};

export default UserChat;
