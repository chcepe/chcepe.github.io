import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";

import Text from "components/Text";
import { AppContext } from "lib/AppContext";
import SOUNDS from "utils/sounds";

import * as S from "./styles";
import * as T from "./types";

export const ProjectList: FC<T.Props> = ({ projects, viewAll }) => {
  const { push } = useHistory();

  const [playPop] = useSound(SOUNDS.pop);

  const { darkMode, withSound } = useContext(AppContext);

  return (
    <S.ProjectList>
      {projects.map(({ name, desc, thumbnail, id }) => (
        <S.Item
          key={id}
          darkMode={darkMode}
          bg={thumbnail}
          onClick={() => {
            if (withSound) playPop();
            push(`/projects/${id}`);
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <S.Content>
            <Text marginB="md" align="center" weight="bold">
              {name}
            </Text>
            <Text
              size="md"
              align="center"
              dangerouslySetInnerHTML={{
                __html: desc.replace(/<[^>]*>?/gm, ""),
              }}
            />
          </S.Content>
        </S.Item>
      ))}
      {viewAll && (
        <S.Item
          darkMode={darkMode}
          bg={"/images/lowpoly.png"}
          onClick={() => {
            if (withSound) playPop();
            push("/projects");
            window.scrollTo({ top: 0, left: 0 });
          }}
        >
          <S.Content>
            <S.GoBtn>
              <span>View all</span>
              <S.GoIcon />
            </S.GoBtn>
          </S.Content>
        </S.Item>
      )}
    </S.ProjectList>
  );
};

const Projects: FC<T.Props & { title?: string; desc?: string }> = ({
  projects,
  viewAll,
  title,
  desc,
}) => {
  return (
    <S.Wrapper autoHeight title={title} desc={desc}>
      <ProjectList projects={projects} viewAll={viewAll} />
    </S.Wrapper>
  );
};

export default Projects;
