const Footer = () => {
    return (
        <footer>
            <div className="contained py-10 flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <img src="/assets/logo-footer.svg" />
                    <p className="flex flex-col gap-1 text-sm">
                        <span>© Storybook Marketing 2023</span>
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