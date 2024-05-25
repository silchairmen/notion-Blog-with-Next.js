"use client"
import * as React from 'react'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'
import '../styles/react-notion-x.css'
import '../styles/prism-one-dark.css'

export default function PostDetail({recordMap}: any) {

  const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then((m) => m.Code))

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

    return (
      <div>
        <NotionRenderer disableHeader recordMap={recordMap} fullPage={true} darkMode={true} components={{
            Code,
            Collection,
            Equation,
            Modal,
            Pdf
          }}
      />
      </div>
    )
}