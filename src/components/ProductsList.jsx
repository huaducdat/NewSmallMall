import {
  Container,
  Divider,
  Stack,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ProductsList({ id, listItems }) {
  return (
    <Container
      id={id}
      maxWidth={"xl"}
      sx={{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "primary",
        borderRadius: 6,
        mt: 3,
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <Stack
        direction="row"
        textAlign="center"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          fontWeight={800}
          fontSize={36}
        >
          Viral Products
        </Typography>
      </Stack>
      <Divider />
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 2,
            p: 2,
          }}
        >
          {listItems.map((item) => (
            <Card
              key={item.id}
              maxWidth={270}
              elevation={2}
              sx={{
                overflow: "visible",
                width: 240,
                height: 500,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea
                // disableRipple
                // disableTouchRipple
                sx={{
                  p: 1,
                  overflow: "visible",
                  zIndex: 2,
                  borderRadius: 0,
                  //    backgroundColor:
                  "&:hover": {
                    "& .MuiCardActionArea-focusHighlight": { opacity: 0 },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={240}
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "contain",
                    transition: ".6s linear .3s",
                    filter: "drop-shadow(0 9px 3px #00000042)",
                    "&:hover": {
                      transform: "scale(1.2)",
                      filter: "drop-shadow(0 9px 3px #000000a2)",
                      zIndex: 3,
                    },
                  }}
                />
              </CardActionArea>
              <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
                <Typography variant="subtitle1">
                  <b>
                    {item.title} - ${item.price}
                  </b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <i>{item.description}</i>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  component={RouterLink}
                  to={`/products/${item.id}`}
                >
                  Show in Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
export default ProductsList;
