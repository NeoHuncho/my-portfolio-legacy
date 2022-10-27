import { createStyles } from "@material-ui/core";

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
  control: {
    "&[data-inactive]": {
      opacity: 0,
      cursor: "default",
    },
  },
}));

export default useStyles;
