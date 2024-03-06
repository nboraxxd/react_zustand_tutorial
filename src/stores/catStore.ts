import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TCatStoreState = {
  cat: {
    bigCats: number
    smallCats: number
  }
  increaseBigCats: () => void
  increaseSmallCats: () => void
  summary: () => string
}

export const useCatStore = create<TCatStoreState>()(
  immer((set, get) => ({
    cat: {
      bigCats: 0,
      smallCats: 0,
    },
    increaseBigCats: () =>
      set((state) => {
        state.cat.bigCats++
      }),
    increaseSmallCats: () =>
      set((state) => {
        state.cat.smallCats++
      }),
    summary: () => {
      const totalCats = get().cat.bigCats + get().cat.smallCats
      return `There are ${totalCats} cats in the store.`
    },
  }))
)