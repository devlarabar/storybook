const Footer = () => {
    return (
        <footer>
            <div className="contained py-10 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="flex gap-5 md:gap-1 flex-col md:flex-row items-center">
                    <img src="/assets/logo-footer.svg" />
                    <p className="flex flex-row md:flex-col gap-1 text-sm">
                        <span>© Storybook Marketing 2023<span className="md:hidden"> | </span></span>
                        <span>storybook@marketing.com</span>
                    </p>
                </div>
                <div className="flex gap-8">
                    <img src="/assets/li.svg" className="w-12 h-12" />
                    <img src="/assets/ig.svg" className="w-12 h-12" />
                </div>
            </div>
        </footer>
    )
}

export default Footer