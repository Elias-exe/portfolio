import PropTypes from "prop-types";
import { useImage } from "../hooks/useImage";

export default function Image({
  fileName, alt, className,
}) {
  const { loading, error, image } = useImage(fileName);

  console.log(image);

  if (error) return <span>{alt}</span>;

  return (
    loading ? (
      <span>loading</span>
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
