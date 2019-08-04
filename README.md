# TheatreJS Hooks

## Installation

```bash
yarn install @theatre/hooks
```

## Usage

```typescript
import React from 'react';
import { useTheatre } from '@theatre/hooks';

interface ITheatreState {
    top: number,
    left: number
}

export default () => {
    const state = useTheatre<ITheatreState>({
        initial: { top: 0, left: 0 },
        object: 'Awesome DIV',
        timeline: 'Awesome Timeline',
        project: 'Awesome Project'
    })

    return (
        <div style={state} />
    )
}
```
