import TextEditor from '../../components/TextEditor'
import PaperBox from '../../components/PaperBox';
import { Button } from '@mantine/core';


const GuidelinesAndPoliciesPage = () => {
  return (
    <PaperBox>
      <TextEditor/>
      <Button mt={24}>Save</Button>
    </PaperBox>
  )
}

export default GuidelinesAndPoliciesPage