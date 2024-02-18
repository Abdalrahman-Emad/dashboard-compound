import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    tableBody: {
        marginTop: 32,
        backgroundColor: '#fff',
        borderRadius: 16,
        boxShadow: '0 3px 12px #00000021',
    },
    tableHeader: {
        backgroundColor: theme.colors.blue[6],
        padding: '0 16px',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        '& tr th': {
            color: '#fff !important',
        },
    },
    tableRow: {
        borderColor: '#CACACA',
    },
}));
