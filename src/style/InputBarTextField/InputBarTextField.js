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
            width: "24.3rem",
            height: "1.8rem",
            border: "none",
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
            width: "24.3rem",
            height: "1.8rem",
            padding: 0,
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            letterSpacing: 0,
          },

          notchedOutline: {
            width: "24.3rem",
            height: "1.8rem",
            border: "none",
            boxSizing: "border-box",
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            width: "24.3rem",
            height: "1.8rem",
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
      <TextField placeholder="Reply to @Rohit Yadav" />
    </ThemeProvider>
  );
};

export default CustomizedInputsStyleOverrides;
