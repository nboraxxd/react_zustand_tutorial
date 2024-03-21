import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { createSelectors } from '@/utils/createSelectors'
import { devtools } from 'zustand/middleware'

type TCatStoreState = {
  cat: {
    bigCats: number
    smallCats: number
  }
  increaseBigCats: () => void
  increaseSmallCats: () => void
  summary: () => string
}

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(
        (set, get) => ({
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
        }),
        { enabled: true, name: 'CatStore' }
      )
    )
  )
)
