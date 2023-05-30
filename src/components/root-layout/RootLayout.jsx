import React from "react";
import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  Header,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNavLink,
} from "@carbon/react";

import { Notification, Fade, Switcher, Search } from "@carbon/icons-react";

function RootLayout() {
  return (
    <div className="root-layout">
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                aria-expanded={isSideNavExpanded}
                className=""
              />
              <HeaderName href="#" prefix="HEMATOLOGIA">
                [Unicamp]
              </HeaderName>
              {/*<HeaderNavigation className="" aria-label="IBM [Platform]">*/}
              {/*  <HeaderMenuItem href="#">Link </HeaderMenuItem>*/}
              {/*  <HeaderMenuItem href="#">Link </HeaderMenuItem>*/}
              {/*  <HeaderMenuItem href="#">Link </HeaderMenuItem>*/}
              {/*  <HeaderMenu aria-label="Link " menuLinkName="Link ">*/}
              {/*    <HeaderMenuItem href="#">Sub-link </HeaderMenuItem>*/}
              {/*    <HeaderMenuItem href="#">Sub-link </HeaderMenuItem>*/}
              {/*    <HeaderMenuItem href="#">Sub-link </HeaderMenuItem>*/}
              {/*  </HeaderMenu>*/}
              {/*</HeaderNavigation>*/}
              {/*<HeaderGlobalBar>*/}
              {/*  <HeaderGlobalAction*/}
              {/*    aria-label="Search"*/}
              {/*    // onClick={action("search click")}*/}
              {/*  >*/}
              {/*    <Search size={20} />*/}
              {/*  </HeaderGlobalAction>*/}
              {/*  <HeaderGlobalAction*/}
              {/*    aria-label="Notifications"*/}
              {/*    // onClick={action("notification click")}*/}
              {/*  >*/}
              {/*    <Notification size={20} />*/}
              {/*  </HeaderGlobalAction>*/}
              {/*  <HeaderGlobalAction*/}
              {/*    aria-label="App Switcher"*/}
              {/*    // onClick={action("app-switcher click")}*/}
              {/*    tooltipAlignment="end"*/}
              {/*  >*/}
              {/*    <Switcher size={20} />*/}
              {/*  </HeaderGlobalAction>*/}
              {/*</HeaderGlobalBar>*/}
              {/*<SideNav*/}
              {/*  aria-label="Side navigation"*/}
              {/*  isRail*/}
              {/*  expanded={isSideNavExpanded}*/}
              {/*  onOverlayClick={onClickSideNavExpand}*/}
              {/*  href="#main-content"*/}
              {/*  onSideNavBlur={onClickSideNavExpand}*/}
              {/*>*/}
              {/*  <SideNavItems>*/}
              {/*    <SideNavMenu renderIcon={Fade} title="Category title">*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*    </SideNavMenu>*/}
              {/*    <SideNavMenu renderIcon={Fade} title="Category title">*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*      <SideNavMenuItem*/}
              {/*        aria-current="page"*/}
              {/*        href="https://www.carbondesignsystem.com/"*/}
              {/*      >*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*    </SideNavMenu>*/}
              {/*    <SideNavMenu renderIcon={Fade} title="Category title">*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*      <SideNavMenuItem href="https://www.carbondesignsystem.com/">*/}
              {/*        Link*/}
              {/*      </SideNavMenuItem>*/}
              {/*    </SideNavMenu>*/}
              {/*    <SideNavLink*/}
              {/*      renderIcon={Fade}*/}
              {/*      href="https://www.carbondesignsystem.com/"*/}
              {/*    >*/}
              {/*      Link*/}
              {/*    </SideNavLink>*/}
              {/*    <SideNavLink*/}
              {/*      renderIcon={Fade}*/}
              {/*      href="https://www.carbondesignsystem.com/"*/}
              {/*    >*/}
              {/*      Link*/}
              {/*    </SideNavLink>*/}
              {/*  </SideNavItems>*/}
              {/*</SideNav>*/}
            </Header>
          </>
        )}
      />
      <Outlet />
    </div>
  );
}

export default RootLayout;
