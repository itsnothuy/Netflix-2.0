import React from "react";
import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";


const Welcome = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }, // 2 seconds (2000 milliseconds)
      });
  return (
    <div>
        <div
            className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-slate-800 relative"
            style={{
                background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
            }}
        >
            <div className="grid content-center justify-center h-full justify-items-center">
                <div className="w-10/12 text-center sm:w-11/12 md:w-40rem">
                    <animated.div style={fade}>
                        <h1 mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl>
                            Unlimited movies, TV shows and more.
                        </h1>
                    </animated.div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Welcome