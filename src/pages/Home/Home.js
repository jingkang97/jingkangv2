import './styles.css'
const Home = () => {
    const handlePress = (e) =>{
        alert('SEX!')
    }
    return (
        // <div class="main">
            // {/* <div>
            //     <div class="intro">Hi Jing Kang here.</div>
            // </div> */}
            <div class="home">
                <div class="orange circle"></div>
                {/* <div class="pink circle"></div> */}
                <div class="purple circle"></div>

                <div class="container glass">
                    <div class="name">Jing Kang</div>
                    <div class="role">Web Developer</div>
                    {/* <div class="slogan">I create stuff sometimes.</div> */}

                    <p class="description">
                        I'm a web developer based in Singapore. I have profound
                        interest in full-stack development, app development, human-computer interactions and everything in between.
                    </p>
                    <div style={{position:'absolute', right:'0', bottom:'0'}}>
                        <img src="jingkang.png" style={{height:'100px'}}/>
                    </div>
                    <div style={{position:'absolute', left:'0', bottom:'0'}}>
                        <button onClick={handlePress} class="messageBtn">Contact Me</button>
                    </div>
                </div>

            </div>
        // </div>
     );
}
 
export default Home;