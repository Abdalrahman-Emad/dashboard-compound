import { Paper } from '@mantine/core'

type Props = {
    children:any
}

const PaperBox = ({children}: Props) => {
  return (
    <Paper p={16} radius={12} sx={{borderTop:"2px solid #339AF0"}} shadow='sm'>
        {children}
    </Paper>
  )
}

export default PaperBox