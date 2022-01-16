const Navbar = () => {
	return (
		<nav className="h-[4em] bg-[#2a2e35] flex items-center justify-between px-8">
			<div className="text-white font-bold text-2xl">Jeremy Status</div>
			<ul className="flex space-x-9 text-white font-bold text-xltext-[#b2becd]">
				<li className="cursor-default text-[#b2becd]">Contact</li>
				<li>
					<a href="https://github.com/pp3times/jerestatus" rel="author" target="_blank">
						github
					</a>
				</li>
				{/* <li>Language</li> */}
			</ul>
		</nav>
	)
}

export default Navbar;