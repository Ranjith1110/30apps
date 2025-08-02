import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  subject: string,
  footer: string,
  onReset: () => void
}

const MoodOutput = ({ subject, footer, onReset }: Props) => {
  return (
    <>
  <div className="space-y-4">
    <div>
      <label htmlFor="" className="block font-medium">Subject:</label>
      <Input value={subject} readOnly />
    </div>
    <div>
      <label htmlFor="" className="block font-medium">Footer Signature:</label>
      <Textarea value={footer} readOnly />
    </div>
    <Button className="w-full" variant="destructive" onClick={onReset}>
      Reset
    </Button>
  </div>
    </>
  )
}

export default MoodOutput