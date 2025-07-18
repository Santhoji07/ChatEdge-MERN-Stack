import { useEffect } from 'react';
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button } from "@mui/material";
import CustomizedInput from '../components/shared/CustomizedInput';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Login page component with form validation and authentication
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // Handles form submission for user login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Signing In!", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed In Successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed", { id: "login" });
    }
  };

  // Redirects to chat page if user is already authenticated
  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth]);

  return (
    <Box width={"100%"} height={"100%"} display="flex" flexDirection={{ xs: "column", md: "row" }}>
      <Box padding={5} mt={5} display={{ md: "flex", sm: "none", xs: "none" }} flex={{ md: 1 }} justifyContent="center" alignItems="center">
        <img src="airobot.png" alt="Robot" style={{ width: "100%", maxWidth: "400px" }} />
      </Box>

      <Box
        display={"flex"}
        flex={{ xs: 1, md: 1 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={{ xs: 0, md: "auto"  }}
        mr={{ xs: 0, md: "auto" }}
        mt={{ xs: 2, sm: 16 }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
            width: "100%",
            maxWidth: "400px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>

            {/* Email input field */}
            <CustomizedInput type="email" name="email" label="Email" />

            {/* Password input field */}
            <CustomizedInput type="password" name="password" label="Password" />

            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "100%",
                maxWidth: "400px",
                borderRadius: 2,
                bgcolor: "#00fffc",
                color: "black",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
