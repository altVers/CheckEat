import Image, { StaticImageData } from "next/image";
import { FC, memo } from "react";
import styles from "./ImageCell.module.scss";
import classNames from "classnames";

interface Props {
  image: StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  blur?: boolean;
  className?: string;
}

export const ImageCell: FC<Props> = ({
  image,
  width = 100,
  height = 100,
  alt = "Изображение",
  blur = false,
  className,
}) => {
  return (
    <div
      className={classNames(styles["image-cell"], className)}
      style={{ width, height }}
    >
      <Image
        src={image}
        alt={alt}
        style={blur ? { filter: "blur(5px)" } : undefined}
      />
    </div>
  );
};
