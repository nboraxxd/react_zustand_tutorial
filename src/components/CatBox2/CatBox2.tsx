import { useCatStore } from '@/stores/catStore'

export default function CatBox2() {
  const bigCats = useCatStore((state) => state.cat.bigCats)

  // Không thể dùng cách này vì nó sẽ làm cả component có smallCats re-render, vì smallCats nằm cùng trong cat với bigCats
  // const { bigCats } = useCatStore.use.cat()

  return (
    <div className="box">
      <h1>CatBox Box</h1>
      <p>Big cats: {bigCats}</p>
    </div>
  )
}
