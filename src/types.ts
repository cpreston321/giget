export interface GitInfo {
  provider: 'github' | 'gitlab' | 'bitbucket' | 'sourcehut'
  repo: string
  subdir: string
  ref: string
}

export interface TemplateInfo {
  name: string
  tar: string
  version?: string
  subdir?: string
  url?: string
  defaultDir?: string

  // Added by giget
  source?: never
  dir?: never

  [key: string]: any
}

export type TemplateProvider = (input: string) => TemplateInfo | Promise<TemplateInfo> | null
