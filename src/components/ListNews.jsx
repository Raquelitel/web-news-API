import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNews from "../hooks/useNews"
import MyNew from "./MyNew"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListNews = () => {

    const { news, totalNews, handleChangePage, page } = useNews()
    const totalPages = Math.ceil(totalNews / 20)

    return (
        <>
            <Typography
                textAlign="center"
                marginY={5}
                variant="h4"
                component={"h2"}
            >
                Últimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {news.map(myNew => (
                    <MyNew
                        key={myNew.url}
                        myNew={myNew}
                    />
                ))}
            </Grid>

            <Stack 
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginY: 5
                }}
            >
                <Pagination 
                    count={totalPages} 
                    color="secondary" 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    )
}

export default ListNews