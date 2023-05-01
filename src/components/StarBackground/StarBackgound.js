import { useEffect } from "react";
import { random } from "lodash";

function StarBackground() {

    //This component, I created dots that move on the screen and 
    //change direction when they hit the corners. 
    //I used this in the background


    useEffect(() => {
        // Get the canvas element and its context
        const canvas = document.getElementById("star-canvas");
        const ctx = canvas.getContext("2d");

        // Set the width and height of the canvas to match the window dimensions
        const width = (canvas.width = window.innerWidth);
        const height = (canvas.height = window.innerHeight);

        // Create an array to hold the stars and set a maximum number of stars
        const stars = [];
        const maxStars = 1000;

        // Loop through and create each star object with random values for position, size, and velocity
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
            // Create a loop that constantly updates the animation
            requestAnimationFrame(animate);
            // Clear the canvas by erasing the previous frame
            ctx.clearRect(0, 0, width, height);

            // Loop through each star and update its position
            for (let i = 0; i < maxStars; i++) {
                const star = stars[i];
                star.x += star.vx;
                star.y += star.vy;

                // If the star goes outside the canvas boundaries, bounce it back in
                if (star.x < 0 || star.x > width) {
                    star.vx = -star.vx;
                }
                if (star.y < 0 || star.y > height) {
                    star.vy = -star.vy;
                }

                // Draw the star as a white circle on the canvas
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