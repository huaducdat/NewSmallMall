import { Box, Container, Stack, Typography, Button } from "@mui/material";

export default function Hero({
  title = "Mua sắm chất lượng, giá hợp lý",
  subtitle = "Hàng chọn lọc, dịch vụ nhanh, trải nghiệm mượt.",
  primaryText = "Xem sản phẩm",
  secondaryText = "Đăng nhập",
  onPrimary,
  onSecondary,
  bgImage, // optional: url ảnh nền
}) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: 360, md: 520 },
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        // nền: ảnh + overlay theo theme
        backgroundImage: bgImage
          ? `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bgImage})`
          : (theme) =>
              `linear-gradient(90deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backdropFilter: "blur(3px)",
          p: 3,
          borderWidth: 3,
          borderRadius: 6,
          borderStyle: "solid",
          borderColor: "primary.main",
        }}
      >
        <Stack spacing={3} sx={{ maxWidth: 720 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              fontSize: { xs: "2rem", md: "3.25rem" },
              color: bgImage ? "#fff" : "text.primary",
              textShadow: bgImage ? "0 2px 8px rgba(0,0,0,.35)" : "none",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: bgImage ? "rgba(255,255,255,.9)" : "text.secondary",
              maxWidth: 640,
            }}
          >
            {subtitle}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            <Button
              variant="contained"
              size="large"
              // onClick={onPrimary}
            >
              {primaryText}
            </Button>
            <Button
              variant="outlined"
              size="large"
              // onClick={onSecondary}
              color={bgImage ? "inherit" : "primary"}
              sx={
                bgImage
                  ? { borderColor: "rgba(255,255,255,.7)", color: "#fff" }
                  : {}
              }
            >
              {secondaryText}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
