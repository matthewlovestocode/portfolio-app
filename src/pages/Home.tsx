import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export function HomePage() {

  const code = `
    function MyComponent() {
      const [count, setCount] = React.useState(0);
      return (
        <Button
          variant="contained"
          onClick={() => setCount(prev => prev + 1)}
        >
          Count {count}
        </Button>
      );
    };
  `;

  return (
    <Container>
      <Typography variant="h3">
        Matthew - Web Enthusiast/Developer - Oakland, CA
      </Typography>

      <LiveProvider
        code={code}
        scope={{ React, Button }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <LiveError />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LiveEditor />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <LivePreview />
          </Grid>
        </Grid>
      </LiveProvider>

    </Container>
  )
}