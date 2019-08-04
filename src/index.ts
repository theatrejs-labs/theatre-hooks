import React, { useEffect, useState } from 'react'
import * as Theatre from 'theatre'

interface IOptions<T> {
  initial: T
  name: string
  timeline: string// | Theatre.Timeline,
  project: string// | Theatre.Project
}

export function useTheatre<T = any> ({ initial, name, timeline, project }: IOptions<T>) {
  const [state, setState] = useState<T>(initial)

  type TProps = Array<keyof T>;

  useEffect(() => {
    const theatreProject = Theatre.getProject(project)
    const theatreTimeline = theatreProject.getTimeline(timeline)
    const propsKeys: TProps = Object.keys(initial) as TProps
    const props = JSON.parse(`{${propsKeys.map((key) => `${key}: { type: 'number' }`)}}`)
    const theatreObject = theatreTimeline.getObject(name, {}, { props })
    theatreObject.onValuesChange((newState: any) => setState(newState as T))
  }, [initial, name, timeline, project])

  return state
}