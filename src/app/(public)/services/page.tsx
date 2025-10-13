 

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Building responsive and modern web applications.",
        },
        {
            title: "UI/UX Design",
            description: "Designing user-friendly and attractive interfaces.",
        },
        {
            title: "SEO Optimization",
            description: "Improving website visibility on search engines.",
        },
    ];

    return (
        <section className="services-section py-12 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;