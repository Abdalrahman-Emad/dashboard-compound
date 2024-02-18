import { useLocation } from 'react-router-dom';
import PaperBox from '../../components/PaperBox';
import { Button, Group, Stack, Text, Textarea } from '@mantine/core';
import { IconMessages } from '@tabler/icons';
import UserChat from './components/UserChat';
import { chatUserFaker } from '../../faker';
import { useMemo } from 'react';

const IndividualChat = () => {
    const { state } = useLocation();
    const user = useMemo(() => chatUserFaker(), [])
    return (
        <PaperBox>
            <Group>
                <IconMessages size={18} />
                <Text>{state.name}</Text>
            </Group>

            <Stack spacing={12} mt={24} sx={{ height: '65vh', overflowY: 'auto' }}>
              <UserChat chat={true} id={user.id} name={state.name} img={state.img} message={user.message} />
            </Stack>
            <Group mt={16}>
              <Textarea placeholder='send message' minRows={3} sx={{width:"88%"}} maxRows={6} />
              <Button>Send</Button>
            </Group>
        </PaperBox>
    );
};

export default IndividualChat;
