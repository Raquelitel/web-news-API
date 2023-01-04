import { CardMedia, Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListNews from './components/ListNews';
import { NewsProvider } from './context/NewsProvider';
import "./app.css"

function App() {

  const imagebg = "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  return (
    <NewsProvider>

      <CardMedia
        image={imagebg}
        sx={{boxShadow: "0px 6px 18px -3px rgba(0,0,0,0.75)"}}
      >
        <header>
          <Typography align='center' marginY={0} paddingY={5} component="h1" variant="h3">
            Buscador de Noticias
          </Typography>

        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingBottom={30}


        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
      </CardMedia>

      <Container sx={{marginTop: -30}}>
        <ListNews />
      </Container>
    </NewsProvider>

  )
}

export default App
