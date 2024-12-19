// import Nav from "../Components/Nav.jsx";
import Nav from "../Components/Nav.jsx";
import "../Styles/Home.css";

export default function Home() {
	return (
		<div id="home">
			<header className="header">
				<Nav />
			</header>

            <main className="main">
				<div>main</div>
            </main>

			<footer className="footer">
				<div>footer</div>
			</footer>
		</div>
	);
}
