# TheatreJS Hooks

Using TheatreJS with React, easy as pie 🥧

## Installation

```bash
yarn add @theatre/hooks
```

## Usage

```typescript
import React from 'react';
import { useTheatre } from '@theatre/hooks';

const project = Theatre.getProject('My Awesome Project');
const timeline = project.getTimeline('My Awesome Timeline');

const Component = () => {
  const { x, y } = useTheatre('Box', ['x', 'y'], timeline);
  
  return (
    <div>{x} {y}</div>
  );
}
```

Or **as a suggestion** you can put your timelines in an external file so you'll be able to use this hook like:


```typescript
import React from 'react';
import { useTheatre } from '@theatre/hooks';

import { TLJumping, TLBouncing } from './Timelines'

const Component = () => {
  const { x, y } = useTheatre('Box', ['x', 'y'], TLJumping);
  const { squish } = useTheatre('Box', ['squish'], TLBouncing);
  
  return (
    <div>{x} {y} {squish}</div>
  );
}
```