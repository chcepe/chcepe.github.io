import { AiFillAndroid, AiFillApple, AiFillGithub } from "react-icons/ai";
import { IoEarth } from "react-icons/io5";

import Link from "components/Link";
import Text from "components/Text";
import { PlatformType, Project } from "utils/types";

import { generateTableInfo } from "./helpers";
import * as S from "./styles";

const PlatformIc = ({ type }: { type: PlatformType }) => (
  <S.PlatformIcon>
    {type === "web" && <IoEarth />}
    {type === "android" && <AiFillAndroid />}
    {type === "ios" && <AiFillApple />}
    {type === "github" && <AiFillGithub />}
  </S.PlatformIcon>
);

const ProjectInfo = ({ project }: { project: Project }) => {
  const info = generateTableInfo(project);
  const { platforms = [] } = project;

  return (
    <>
      {platforms && (
        <S.Platforms>
          {platforms.map(({ link, type }) => (
            <Link key={link} target="_blank" href={link}>
              <PlatformIc type={type} />
            </Link>
          ))}
        </S.Platforms>
      )}
      <S.Table>
        <tbody>
          {info.map(({ id, label, value }) => (
            <tr key={id}>
              <td>{label}</td>
              <td>
                <Text>{value}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </>
  );
};
export default ProjectInfo;
