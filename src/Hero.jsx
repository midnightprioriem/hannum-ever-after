
const Hero = () => {
    const className = 'hero';

    return (
        <div className={className}>
            <div className="heroText">
                <h1 className="heroTitle" >Let's get Married!</h1>
                <h2 className="heroSubtitle">Bella & Zach</h2>
                <button className="btn">
                    <svg width="90px" height="45px" viewBox="0 0 90 45" className="border">
                        <polyline points="89,1 89,44 1,44 1,1 89,1" className="bg-line" />
                        <polyline points="89,1 89,44 1,44 1,1 89,1" className="hl-line" />
                    </svg>
                    <p>RSVP</p>
                </button>
            </div>
        </div>
    );
};

export default Hero;