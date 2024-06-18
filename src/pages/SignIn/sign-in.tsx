import Grid from "@mui/material/Grid";
import "./styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1076px",
          height: "761px",
          background: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Grid container sx={{ flex: 1 }}>
          <Grid item xs={6} sx={{ padding: "32px" }}>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              Welcome !
            </Typography>
            <form style={{ paddingLeft: "30px" }}>
              <Grid container rowSpacing={5}>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <label className="form-label" style={{ fontSize: "16px" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{
                      width: "100%",
                      background: "#F7FBFF",
                      borderRadius: "12px",
                    }}
                  />
                </Grid>
                <Grid item xs={11}>
                  <button type="submit" className="submit-sign-up">
                    Sign up
                  </button>
                </Grid>
                <Grid item xs={11} sx={{ position: "relative" }}>
                  <img
                    src="./images/Google.png"
                    alt=""
                    style={{ position: "absolute", bottom:"8px", left:"60px" }}
                  />
                  <button type="submit" className="submit-with-google">
                    Continue with google
                  </button>
                </Grid>
              </Grid>
            </form>
            <Typography
              sx={{
                color: "#959CB6",
                fontSize: "16px",
                textAlign: "center",
                paddingTop: "60px",
              }}
            >
              @ 2023 ALL RIGHT RESERVED
            </Typography>
          </Grid>
          {/* <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "60px",
                fontWeight: "bold",
                lineHeight: "-100px",
              }}
            >
              Welcome Back ! 
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "36px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              DANG TRUNG HIEU
            </Typography>
            <Typography
              sx={{
                color: "#959CB6",
                fontSize: "16px",
                textAlign: "center",
                paddingTop: "60px",
              }}
            >
              @ 2023 ALL RIGHT RESERVED
            </Typography>
          </Grid> */}
          <Grid
            item
            xs={6}
            sx={{
              padding: "32px 0",
            }}
          >
            <img
              src="./images/Art.jpg"
              style={{
                width: "491px",
                height: "697px",
                objectFit: "cover",
                borderRadius: "24px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignIn;
