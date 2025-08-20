import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
function Foot() {
  return (
    <Paper
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "#b6b6b6ff" : "#252525ff",
        mt: 2,
        p: 1,
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          @2025 by Duc Dat Hua
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            textAlign: "center",
            // cursor: "pointer",
          }}
        >
          <PhoneIcon />
          Contact: +84-854065289
        </Typography>
        <MuiLink
          underline="hover"
          variant="body2"
          color="text.secondary"
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <HomeIcon />
          About Us (Any Issues, please go here to get cantact in detail)
        </MuiLink>
      </Stack>
    </Paper>
  );
}
export default Foot;
