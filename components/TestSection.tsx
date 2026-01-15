const TestSection = () => {
    return (
        <section className="min-h-screen bg-ivory flex items-center justify-center">
            <div className="text-center">
                <h2 className="font-serif text-6xl text-charcoal mb-4">
                    Test Section
                </h2>
                <p className="font-sans text-charcoal/60 text-xl">
                    If you can see this, the scroll release worked!
                </p>
                <p className="font-sans text-charcoal/40 text-sm mt-4">
                    You successfully scrolled through all 3 slides in the "Get It Sold" section
                </p>
            </div>
        </section>
    );
};

export default TestSection;
