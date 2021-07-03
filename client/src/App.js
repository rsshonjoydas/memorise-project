// ? external imports
import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// ? internal imports
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';

function App() {
  const style = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={style.appBar} position="static" color="inherit">
        <Typography className={style.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={style.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
