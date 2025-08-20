import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

function Login({ setLog }) {
  const [showPass, setPass] = useState(false);

  const userAcc = {
    email: "user@gmail.com",
    password: "password123",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const mail = data.get("email");
    const password = data.get("password");
    if (mail !== userAcc.email || password !== userAcc.password) {
      alert("Your Input is not correct.");
      return;
    }
    alert("Logined.");
    setLog(true);
    navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(214, 214, 214, 1)"
            : "rgba(0, 0, 0, 1)",
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            p: 3,
            mt: -30,
          }}
        >
          <Typography variant="h5" fontWeight={700} textAlign="center" mb={2} color="primary">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2} alignItems='center'>
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                required
              />
              <TextField
                label="Password"
                type={showPass ? "text" : "password"}
                name="password"
                fullWidth
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setPass((prev) => !prev)}
                        edge="end"
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                <b>Login</b>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => navigate(-1)}
              >
                <b>Cancel</b>
              </Button>
              <MuiLink sx={{cursor:'pointer'}}>or Sign-up now.</MuiLink>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
export default Login;
