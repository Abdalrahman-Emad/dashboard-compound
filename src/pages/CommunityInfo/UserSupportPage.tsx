import PaperBox from '../../components/PaperBox'
import TextEditor from '../../components/TextEditor'
import { Button } from '@mantine/core'


const UserSupportPage = () => {
  return (
    <PaperBox>
      <TextEditor/>
      <Button mt={24}>Save</Button>
    </PaperBox>
  )
}

export default UserSupportPage