import PropTypes from "prop-types";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

function SvgColors({ src, sx, ...other }, ref) {
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: "inline-block",
      bgcolor: "currentColor",
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />;
}

const SvgColor = forwardRef(SvgColors);

SvgColor.propTypes = {
  src: PropTypes.string,
  sx: PropTypes.object,
};

export default SvgColor;
