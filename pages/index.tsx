import { useRecoilState } from "recoil";
import Counter from "../components/Counter";
import Text from "../components/Text";
import { lengthAtom, textAtom } from "../state/state";

export default function Home() {
  const [length, setLength] = useRecoilState(lengthAtom)
  const [text, setText] = useRecoilState(textAtom)


  const handleChange = (e) => {
    setText(e.target.value);
    setLength(e.target.value.length);
  }
  return (
    <div className="flex flex-col justify-center text-center border-4 border-gray-700 m-7 ">
      <h1>Type Something</h1>
      <input
        style={{ textAlign: "center" }}
        type="text"
        value={text}
        className='border-2 border-black hover:bg-gray-600 hover:text-gray-100'
        onChange={handleChange}
        placeholder="Write Something"
      />
      <Counter />
      <Text />
    </div>
  )
}