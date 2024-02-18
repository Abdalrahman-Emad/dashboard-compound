import { IconUserPlus } from '@tabler/icons';

import PaperBox from '../../../components/PaperBox';
import { fakeChatUserList } from '../../../faker';
import UserChat from './UserChat';
import { ActionIcon, Group, Stack, TextInput } from '@mantine/core';

const UsersChatList = () => {
    return (
        <PaperBox>
            <Group mb={24} position='apart'>
                <TextInput sx={{width:"85%"}}  placeholder='search' />
                <ActionIcon  size="lg" variant="outline">
                    <IconUserPlus size={18} color="blue"/>
                </ActionIcon>
            </Group>
            <Stack p={16} spacing={32} sx={{ overflowY: 'auto', height: '90vh' }}>
                {fakeChatUserList(10).map(({ name, message, img, id }) => (
                    <UserChat key={id} id={id} name={name} message={message} img={img} />
                ))}
            </Stack>
        </PaperBox>
    );
};

export default UsersChatList;
