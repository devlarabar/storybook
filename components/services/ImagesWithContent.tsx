const ImagesWithContent = () => {
    const sectionClass = "flex flex-col md-lg:flex-row gap-16 justify-between items-center"
    return (
        <section className="contained flex flex-col gap-32">
            <section className={sectionClass} data-aos="fade">
                <section className="flex-1 flex flex-col gap-6 max-md-lg:order-1">
                    <h2 className="text-left">Mobile-First</h2>
                    <hr className="left-divider" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At minima, nostrum assumenda et iusto hic aspernatur fugit consequatur ut aperiam asperiores harum, voluptatibus doloremque deleniti, cumque perspiciatis maiores quo repellendus?</p>
                </section>
                <aside className="bg-[url('/assets/mobile-first.jpg')] bg-center bg-cover max-md-lg:w-full aspect-[8/3] md-lg:aspect-[5/3] flex-1 rounded-3xl">
                </aside>
            </section>
            <section className={sectionClass} data-aos="fade">
                <aside className="bg-[url('/assets/accessible-design.jpg')] bg-center bg-cover max-md-lg:w-full aspect-[8/3] md-lg:aspect-[5/3] flex-1 rounded-3xl">
                </aside>
                <section className="flex-1 flex flex-col gap-6">
                    <h2 className="text-left">Accessible Design</h2>
                    <hr className="left-divider" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At minima, nostrum assumenda et iusto hic aspernatur fugit consequatur ut aperiam asperiores harum, voluptatibus doloremque deleniti, cumque perspiciatis maiores quo repellendus?</p>
                </section>
            </section>
            <section className={sectionClass} data-aos="fade">
                <section className="flex-1 flex flex-col gap-6 max-md-lg:order-1">
                    <h2 className="text-left">Documentation</h2>
                    <hr className="left-divider" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At minima, nostrum assumenda et iusto hic aspernatur fugit consequatur ut aperiam asperiores harum, voluptatibus doloremque deleniti, cumque perspiciatis maiores quo repellendus?</p>
                </section>
                <aside className="bg-[url('/assets/documentation.jpg')] bg-center bg-cover max-md-lg:w-full aspect-[8/3] md-lg:aspect-[5/3] flex-1 rounded-3xl">
                </aside>
            </section>
        </section>
    )
}

export default ImagesWithContent