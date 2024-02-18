import { Title, Button, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
type Props = {
    additionalTitle?: string;
    title?: string;
};
const PageTitle = ({ additionalTitle ,title }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [pageTitle, setpageTitle] = useState('');

    useEffect(() => {
        const pathArray = location.pathname.split('/');
        if (pathArray) {
            setpageTitle(pathArray[pathArray.length - 1]);
        }
    }, [location]);

    return (
        <Group position="apart" my={24}>
            <Group align="baseline">
                <Title order={2}>{title ? title : pageTitle}</Title>
                <Text size="lg" color="gray">
                    {additionalTitle}
                </Text>
            </Group>
            <Button onClick={() => navigate(-1)} color="green">
                Back
            </Button>
        </Group>
    );
};

export default PageTitle;
