"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/Logo.png";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export type NItem = {
  route: string;
  pathname: string;
};

const navItems: NItem[] = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Donation",
    pathname: "/donation",
  },
];
function NavBar({ session }: { session: any }) {
  const pathname = usePathname();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box  position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src={logoImage} width={100} height={100} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box className="w-full text-center">
                {navItems.map((item) => (
                  <Link key={item.pathname} href={item.pathname}>
                    <Button className="text-red-400">{item.route}</Button>
                  </Link>
                ))}
                {session ? (
                  <>
                    <Link href="/statistics">
                      <Button className="text-red-400">STATISTICS</Button>
                    </Link>
                    <Button
                     className="text-red-400"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                  className="text-red-400"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Login
                  </Button>
                )}
              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src={logoImage} width={300} height={300} alt="logo" />
          </Typography>
          <Box
            className="w-full text-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Link key={item.pathname} href={item.pathname}>
                <Button className="text-red-400">{item.route}</Button>
              </Link>
            ))}
            {session ? (
                  <>
                    <Link href="/statistics">
                      <Button className="text-red-400">STATISTICS</Button>
                    </Link>
                    <Button
                     className="text-red-400"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    className="text-red-400"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Login
                  </Button>
                )}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default NavBar;
