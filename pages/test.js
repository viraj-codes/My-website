import React from 'react'

function test() {
    return (
        <>
            <div className='outer-wrapper bgm1'></div>
            <div style={{ height: "800px" }}>
                Saurav Anand
            </div>
            <div className='outer-wrapper bgm2'></div>
            <div style={{ height: "800px" }}>
                Viraj
            </div>
            <style jsx>{`
                .outer-wrapper{
                    /* The image used */
                    /* Set a specific height */
                    min-height: 100vh; 
                    /* Create the parallax scrolling effect */
                    background-attachment: fixed;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
                .bgm1{background-image: url("https://images.pexels.com/photos/5913510/pexels-photo-5913510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");}
                .bgm2{background-image: url("https://images.pexels.com/photos/13088058/pexels-photo-13088058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");}
            `}</style>

        </>
    )
}

export default test