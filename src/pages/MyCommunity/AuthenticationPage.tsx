import { Title, Tabs } from '@mantine/core';
import PaperBox from '../../components/PaperBox';
import PendingTable from './components/PendingTable';

const AuthenticationPage = () => {
    return (
        <div>
            <PaperBox>
                <Title order={2} my={24}>
                    Authentication
                </Title>
                <Tabs variant="pills" defaultValue="pending">
                    <Tabs.List grow position="center">
                        <Tabs.Tab value="pending">Pending</Tabs.Tab>
                        <Tabs.Tab value="Approved">Approved</Tabs.Tab>
                        <Tabs.Tab value="Rejected">Rejected</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="pending">
                        <PendingTable />
                    </Tabs.Panel>
                    <Tabs.Panel value="Approved">
                        <PendingTable />
                    </Tabs.Panel>
                    <Tabs.Panel value="Rejected">
                        <PendingTable />
                    </Tabs.Panel>
                </Tabs>
            </PaperBox>
        </div>
    );
};

export default AuthenticationPage;
