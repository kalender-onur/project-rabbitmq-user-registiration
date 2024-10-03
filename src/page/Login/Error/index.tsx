import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

function Error404() {
  return (
    <Box component="div">
      <Container
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box marginTop={15}>
          <Typography variant="h3">Sorry, page not found!</Typography>
          <Typography component="p" width={500} marginTop={2} marginBottom={2}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
          <Typography fontSize="9rem">404</Typography>
          <Button variant="contained" href="/">
            Go To Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Error404;
