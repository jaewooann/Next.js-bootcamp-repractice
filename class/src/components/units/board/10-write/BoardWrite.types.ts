import { ChangeEvent } from "react"

export interface IBoardWriteProps {
  isEdit: boolean
  data?: any 
}

export interface Imyvariables {
  number: number
  writer?: string
  title?: string
  contents?: string
}

export interface IBoardWriteUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
  onClickUpdate: () => void
  isEdit: boolean
  data?: any
}