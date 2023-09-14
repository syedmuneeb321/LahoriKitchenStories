export type Root = Root2[]

export interface Root2 {
  metadata: Metadata
  sys: Sys
  fields: Fields
}

interface Metadata {
  tags: any[]
}

interface Sys {
  space: Space
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment
  revision: number
  locale: string
}

interface Space {
  sys: Sys2
}

interface Sys2 {
  type: string
  linkType: string
  id: string
}

interface Environment {
  sys: Sys3
}

interface Sys3 {
  id: string
  type: string
  linkType: string
}

interface Fields {
  title: string
  slug:string
  file: File
  description?: string
  cookingTime:string,
  thumbnail:{sys:{id:string}}
}

interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

 interface Details {
  size: number
  image: Image
}

 interface Image {
  width: number
  height: number
}

