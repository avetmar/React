import Nav from "./Nav";

function Header(props) {
  console.log(props.site.site_name);
  return (
    <header>
      <h1>{props.site.site_name}</h1>
      <h2>{props.site.site_title}</h2>
      <Nav nav={props.site.nav} />
    </header>
  );
}

export default Header;
