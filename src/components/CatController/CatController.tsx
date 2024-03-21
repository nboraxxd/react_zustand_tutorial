import { useCatStore } from '@/stores/catStore'
import { shallow } from 'zustand/shallow'

export default function CatController() {
  // Cách gọi này sẽ làm CatController re-render không cần thiết
  // const { increaseBigCats, increaseSmallCats } = useCatStore()

  // Cách gọi này sẽ không làm CatController re-render nhưng dài dòng
  // const increaseBigCats = useCatStore((state) => state.increaseBigCats)
  // const increaseSmallCats = useCatStore((state) => state.increaseSmallCats)

  // Cách gọi này sẽ không làm CatController re-render và ngắn gọn
  // const increaseBigCats = useCatStore.use.increaseBigCats()
  // const increaseSmallCats = useCatStore.use.increaseSmallCats()

  // Cách gọi này sẽ không làm CatController re-render và ngắn gọn
  // const { increaseBigCats, increaseSmallCats } = useCatStore(
  //   (state) => ({
  //     increaseBigCats: state.increaseBigCats,
  //     increaseSmallCats: state.increaseSmallCats,
  //   }),
  //   shallow
  // )

  const [increaseBigCats, increaseSmallCats] = useCatStore(
    (state) => [state.increaseBigCats, state.increaseSmallCats],
    shallow
  )

  return (
    <div className="box">
      <h1>Cat controller</h1>
      <div>
        <button onClick={increaseBigCats}>Add big cat</button>
        <button onClick={increaseSmallCats}>Add small cat</button>
      </div>
    </div>
  )
}
