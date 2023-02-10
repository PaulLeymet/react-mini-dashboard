import { CSSProperties } from 'react'
import DesignInput from '../../../../design-system/DesignInput/DesignInput'
import DesignText, { DesignTextProps } from '../../../../design-system/DesignText/DesignText'

export default function EditableText({ editable, onUpdate, ...props }: { editable?: boolean; onUpdate?: (text: string) => void } & DesignTextProps) {
  // =================
  // Stores
  // =================

  // =================
  // Navigation
  // =================

  // =================
  // States
  // =================

  // =================
  // Hooks
  // =================

  // =================
  // Methods
  // =================

  // =================
  // Render
  // =================
  return editable ? <DesignInput text={props.children} onChange={onUpdate} /> : <DesignText {...props} />
}

const styles: {
  [key: string]: CSSProperties | undefined
} = {
  text: {},
}
