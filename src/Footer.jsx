const Footer = () => {
	const today = new Date()
	return (
		<footer>
			<p>Copyright &copy; {today.getFullYear()}. kay-arky</p>
		</footer>
	)
}

export default Footer
