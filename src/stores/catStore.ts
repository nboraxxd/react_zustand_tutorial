import { StateCreator, create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { createSelectors } from '@/utils/createSelectors'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'

type TCatStoreState = {
  cat: {
    bigCats: number
    smallCats: number
  }
  increaseBigCats: () => void
  increaseSmallCats: () => void
  summary: () => string
}

const createCatSlice: StateCreator<
  TCatStoreState,
  [
    ['zustand/immer', never],
    ['zustand/devtools', unknown],
    ['zustand/subscribeWithSelector', never],
    ['zustand/persist', unknown],
  ]
> = (set, get) => ({
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
})

export const useCatStore = createSelectors(
  create<TCatStoreState>()(
    immer(
      devtools(subscribeWithSelector(persist(createCatSlice, { name: 'cat-store' })), {
        enabled: true,
        name: 'CatStore',
      })
    )
  )
)
