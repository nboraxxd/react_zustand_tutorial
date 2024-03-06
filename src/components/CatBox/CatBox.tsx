import { useCatStore } from '@/stores/catStore'

export default function CatBox() {
  const { cat, summary, increaseBigCats, increaseSmallCats } = useCatStore()

  const totalCats = summary()

  return (
    <div className="box">
      <h1>CatBox Box</h1>
      <p>Big cats: {cat.bigCats}</p>
      <p>Small cats: {cat.smallCats}</p>
      <p>Summary: {totalCats}</p>
      <div>
        <button onClick={increaseBigCats}>Add big cat</button>
        <button onClick={increaseSmallCats}>Add small cat</button>
      </div>
    </div>
  )
}
