import { Card, CardActions, CardContent, Link, Typography, Grid, CardMedia } from "@mui/material"

const MyNew = ({ myNew }) => {

    const { urlToImage, url, title, description, source } = myNew

    return (
        <Grid item md={6} lg={4}>
            <Card
                sx={{height: 485}}
            >
                {urlToImage && (
                    <CardMedia
                        component="img"
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={"250"}
                    />
                )}

                <CardContent>
                    <Typography
                        variant="body1"
                        color="secondary"
                        fontWeight="bold"
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"

                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width={"100%"}
                        textAlign="center"
                        sx={{
                            textDecoration: "none"
                        }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>

            </Card>
        </Grid>

    )
}

export default MyNew