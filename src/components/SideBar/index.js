import React from "react";
import StickyBox from "react-sticky-box";
import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talez você curta"
            elements={[
              <FollowSuggestion
                name="Luiz Batanero"
                nickname="@luizbatanero"
              />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemoralez" />,
              <FollowSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />
          <List
            title="Talez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
