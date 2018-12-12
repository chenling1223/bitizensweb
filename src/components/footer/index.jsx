import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return <div className="bitizen-footer">
                <div className="players-footer">
                    <img src={require("../../static/image/icons/players.png")} alt="" />
                    <div className="players-footer-text">
                        <h2>FOR PLAYERS</h2>
                        <a href="/faq">FAQ</a>
                        <a href="https://docs.google.com/forms/d/1xDavZE4wBlceRDuxQDgroBO5lfrEL4Y4nsM8BfCH1AU/edit">
                            Feedback
                        </a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/user-agreement">User Agreement</a>
                    </div>
                </div>
                <div className="developer-footer">
                    <img src={require("../../static/image/icons/developers.png")} alt="" />
                    <div className="players-footer-text">
                        <h2>FOR DEVELOPERS</h2>
                        <a href="/faq">Bug Bounty</a>
                        <a href="https://docs.google.com/forms/d/1xDavZE4wBlceRDuxQDgroBO5lfrEL4Y4nsM8BfCH1AU/edit">
                            Portal SDK
                        </a>
                    </div>
                </div>
                <div className="social-footer">
                    <h2>Join the BitGuild Community</h2>
                    <div className="social-network">
                        <a href="https://www.facebook.com/BitGuildPLAT">
                            <img src={require("../../static/image/icons/facebook.png")} alt="" />
                        </a>
                        <a href="https://twitter.com/BitGuildPLAT">
                            <img src={require("../../static/image/icons/twitter.png")} alt="" />
                        </a>
                        <a href="https://discordapp.com/invite/m8ppcrd">
                            <img src={require("../../static/image/icons/discord.png")} alt="" />
                        </a>
                        <a href="https://www.reddit.com/r/BitGuild/">
                            <img src={require("../../static/image/icons/reddit.png")} alt="" />
                        </a>
                        <a href="https://medium.com/the-notice-board">
                            <img src={require("../../static/image/icons/medium.png")} alt="" />
                        </a>
                    </div>
                </div>
                <div className="exchanges-footer">
                    <h2>EXCHANGES SUPPORTING PLAT</h2>
                    <div className="exchanges-icons">
                        <a href="https://bit.ly/2CLvaXY">
                            <img src={require("../../static/image/icons/latoken.png")} alt="" />
                        </a>
                    </div>
                </div>
            </div>;
    }
}

export default Footer;