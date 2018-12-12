import React, { Component } from 'react';
import './gamepage.css';

let margin = {
    marginTop: '62px'
}

class Gamepage extends Component{

    render() {
        return <div style={margin}>
            <div className="game-banner" />
                <div className="section-background">
                    <img src={require("../../static/image/boy_and_girl.png")} alt="" className="game-banner-bitizens" />
                    <section>
                        <div className="backgroun-features" />
                    </section>
                    <img className="bitropolis_globe" src={require("../../static/image/bitropolis_globe.png")} alt="" />
                    <section>
                        <div className="background-yellow" />
                    </section>
                    <img className="rocket-img" src={require("../../static/image/rocket.png")} alt="" />
                    <img className="launchpad-img" src={require("../../static/image/launchpad.png")} alt="" />
                    <section>
                        <div className="backgroun-dark" />
                    </section>
                </div>
                <div className="game-landing">
                    <section className="play-now">
                        <p>
                            Create & customize your personal 3D Bitizen,
                            and discover what Bitropolis has to offer.
                            Take your first steps in a new social
                            blockchain experience today!
                        </p>
                        <button>Play Now</button>
                    </section>
                    <section className="game-video">
                        <iframe src="https://www.youtube.com/embed/MiEFHUgOvMk?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" />
                    </section>
                    <section className="bitizen-features">
                        <h2>BITIZEN FEATURES</h2>
                    </section>
                    <section className="bitizen-wardrobe">
                        <div className="bitizen-text-left">
                            <h2>WARDROBE</h2>
                            <p>
                                Dress up your Bitizen! In this update,
                                you'll be able to fully customize your
                                new Bitizen with fancy threads.
                            </p>
                            <p>
                                Create an outfit that really represents
                                you, and get ready to flaunt your style!
                            </p>
                        </div>
                        <div className="bitizen-wardrobe-bg" />
                    </section>
                    <section className="bitizen-mining">
                        <div className="bitizen-text-right">
                            <h2>MINING</h2>
                            <p>
                                Get your hands dirty in the depths below
                                as you search for valuable items.
                            </p>
                            <p>
                                Grow your item collection and join the
                                ranks of the illustriuous self-made
                                Bitizens.
                            </p>
                        </div>
                        <div className="bitizen-mining-bg" />
                    </section>
                    <section className="bitizen-bitropolis">
                        <div className="bitizen-text-left">
                            <h2>BITROPOLIS</h2>
                            <p>
                                Take your first real steps in a new
                                world of wonder, magic, and crypto.
                                Explore the city of Bitropolis, and
                                discover all the different activities on
                                offer!
                            </p>
                            <p>Your journey is just beginning!</p>
                        </div>
                        <div className="bitizen-bitropolis-bg" />
                    </section>
                    <section className="single-title">
                        <h2>LIMITED PRE-SALE ITEMS</h2>
                    </section>
                    <section className="limited-items">
                        <img src={require("../../static/image/wilds.png")} alt="" />
                        <img src={require("../../static/image/skies.png")} alt="" />
                        <img src={require("../../static/image/seas.png")} alt="" />
                        <img src={require("../../static/image/cyberspace.png")} alt="" />
                    </section>
                    <section className="limited-text">
                        <p>
                            We're offering you a change to secure some
                            unique, limited-run items! These fancy
                            outfits are only obtainable during the
                            pre-sale, and will not be available for
                            direct purchase ever again once the pre-sale
                            concludes!
                        </p>
                        <button>SALE</button>
                    </section>
                </div>
            </div>;
    }
}

export default Gamepage