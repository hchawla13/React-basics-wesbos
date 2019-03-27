import React from 'react';


const Header = (prop) => {
    return(
        <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{prop.tagline}</span>
                    <span>{prop.age}</span>
                </h3>
            </header>
    )
}

export default Header;