import { CSSProperties } from 'react'

export default function DesignBox({ children, style }: { children: JSX.Element | JSX.Element[] | null; style?: CSSProperties }) {
  return <div style={{ ...styles.main, ...style }}>{children}</div>
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  main: { display: 'flex', flexGrow: 1, maxWidth: '100%' },
}
