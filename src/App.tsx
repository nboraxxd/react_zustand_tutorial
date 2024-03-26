import { BearBox } from '@/components/BearBox'
import { CatBox } from '@/components/CatBox'
import { FoodBox } from '@/components/FoodBox'

export default function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <BearBox />
        <FoodBox />
      </div>
      <div>
        <CatBox />
      </div>
    </div>
  )
}
