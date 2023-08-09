import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            border: "none",
            width: "90%",
            marginRight: "1.6rem",
            boxSizing: "border-box",
            "--TextField-brandBorderColor": "#ffffff",
            "--TextField-brandBorderHoverColor": "#ffffff",
            "--TextField-brandBorderFocusedColor": "#ffffff",

            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            padding: 0,
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            letterSpacing: 0,
          },

          notchedOutline: {
            border: "none",
            boxSizing: "border-box",
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            border: "none",

            boxSizing: "border-box",

            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const CustomizedInputsStyleOverrides = () => {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <TextField placeholder="Write a message" />
    </ThemeProvider>
  );
};

export default CustomizedInputsStyleOverrides;
