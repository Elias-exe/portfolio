import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { useImage } from "../hooks/useImage";

export default function Image({
  fileName, alt, className,
}) {
  const { loading, error, image } = useImage(fileName);

  if (error) return <span>{alt}</span>;

  return (
    loading ? (
      <ReactLoading type="spin" color="blue" />
    ) : (
      <img
        className={`Image${
          className
            ? className.padStart(className.length + 1)
            : ""
        }`}
        src={image}
        alt={alt}
      />
    )
  );
}

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
