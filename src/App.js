import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function App() {
  const navbarMenuItemsLeft = [
    { label: "Home", key: "features", route: "#" },
    { label: "News", key: "customers", route: "#", isActive: true },
    { label: "Prayers", key: "pricing", route: "#" },
    { label: "Books", key: "company", route: "#" }
  ];

  const navbarMenuItemsRight = [
    { label: "Login", key: "customers", route: "#", isActive: true },
    { label: "Sign Up", key: "pricing", route: "#" }
  ];

  const profileMenuItems = [
    { label: "My Settingss", key: "settings", route: "#", withDivider: true },
    {
      label: "Team Settings",
      key: "team_settings",
      route: "#",
      withDivider: false
    },
    { label: "Analytics", key: "analytics", route: "#", withDivider: true },
    { label: "System", key: "system", route: "#", withDivider: false },
    {
      label: "Configuration",
      key: "configuration",
      route: "#",
      withDivider: false
    },
    { label: "", key: "help_and_feedback", route: "#", withDivider: false },
    {
      label: "Logout",
      key: "logout",
      route: "#",
      withDivider: true,
      color: "error"
    }
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%"
            }
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
          css="align-content=flex-start;"
        >
          {navbarMenuItemsLeft.map((item, i) => (
            <Navbar.Link href={item.route} isActive={item.isActive}>
              {item.label}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          {navbarMenuItemsRight.map((item, i) => (
            <Navbar.Link href={item.route} isActive={item.isActive}>
              {item.label}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "5%",
              jc: "flex-end"
            }
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              {profileMenuItems.map((item, index) => (
                <Dropdown.Item
                  key={item.key}
                  withDivider={item.withDivider}
                  color={item.color}
                >
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse showIn="xs">
          {navbarMenuItemsLeft.map((item, index) => (
            <Navbar.CollapseItem
              key={item.key}
              activeColor={item.color ? item.color : "warning"}
              css={{}}
              isActive={item.isActive}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%"
                }}
                href="#"
              >
                {item.label}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
