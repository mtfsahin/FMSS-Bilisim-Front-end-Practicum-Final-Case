import { useEffect } from "react";
import { random } from "lodash";

function StarBackground() {

    //This component, I created dots that move on the screen and 
    //change direction when they hit the corners. 
    //I used this in the background


    useEffect(() => {
        //create canvas
        const canvas = document.getElementById("star-canvas");
        const ctx = canvas.getContext("2d");
        const width = (canvas.width = window.innerWidth);
        const height = (canvas.height = window.innerHeight);

        //create stars
        const stars = [];
        const maxStars = 1000;

        
        for (let i = 0; i < maxStars; i++) {
            stars.push({
                x: random(0, width),
                y: random(0, height),
                radius: Math.random(),
                vx: random(-1, 1),
                vy: random(-1, 1),
            });
        }
        //animate stars
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < maxStars; i++) {
                const star = stars[i];
                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0 || star.x > width) {
                    star.vx = -star.vx;
                }

                if (star.y < 0 || star.y > height) {
                    star.vy = -star.vy;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
            }
        }

        //start animate
        animate();

        // Handle window resize
        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        // resize window 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <canvas
            id="star-canvas"
            style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        ></canvas>
    );
}

export default StarBackground;