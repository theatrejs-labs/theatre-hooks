import React, { useEffect, useState } from 'react'
import * as Theatre from 'theatre'

export function useTheatre<T = any> (objectName: string, propsArray: Array<keyof T>, timeline: Theatre.Timeline) {
  const initial = propsArray.reduce<T>((result, item) => {
    result[item] = 0 as any;
    return result;
  }, {} as T)
  const [state, setState] = useState<T>(initial)

  useEffect(() => {
    // Generating options for making theatre object
    const props = JSON.parse(`{${propsArray.map((key: keyof T) => `"${key}": { "type": "number" }`)}}`)
    // Creating object
    const theatreObject = timeline.getObject(objectName, {}, { props })
    // Connecting object value changes to state
    theatreObject.onValuesChange((newState: any) => setState(newState as T))
  }, [name, timeline])

  return state
}