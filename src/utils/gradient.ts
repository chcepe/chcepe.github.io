import hash from "string-hash";
import color from "tinycolor2";

const generateGradient = (
  uid: string,
  opacity?: number,
  type?: "diagonal" | "radial" | "horizontal" | "vertical"
) => {
  if (uid) {
    const n = hash(uid);
    const c1 = color({ h: n % 360, s: 0.95, l: 0.5, a: opacity ?? 1 }).darken(
      20
    );
    const c1_ = c1.toRgbString();
    const c2 = c1.triad()[1].toRgbString();

    switch (type) {
      case "diagonal":
        return `linear-gradient(to top right, ${c1_}, ${c2})`;

      case "radial":
        return `radial-gradient(circle, ${c1_}, ${c2})`;

      case "horizontal":
        return `linear-gradient(${c1_}, ${c2})`;

      case "vertical":
        return `linear-gradient(to right, ${c1_}, ${c2})`;

      default:
        return `linear-gradient(to top right, ${c1_}, ${c2})`;
    }
  }

  throw Error("uid is required");
};

export default generateGradient;
