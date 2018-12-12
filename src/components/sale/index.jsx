import React from 'react'
// import { hashHistory } from 'react-router'
import PropTypes from 'prop-types';
// import ScaleLoader from 'react-spinners/dist/spinners/ScaleLoader';
import { Image, Row, Col, Tab, Tabs, ProgressBar } from 'react-bootstrap';
// import { FormattedHTMLMessage, FormattedMessage, injectIntl } from 'react-intl';
import ItemSetDetailsCard from '../itemcard/index';
// sale style


const PLAT_DISCOUNT = 50;
const TOTAL_ITEMS_COUNT = 139;
const BITIZENS_GAME_ID = 3;

const SETS = [
  {
    id: 'pioneer_of_the_wilds',
    tokenId: 16,
    total: 100,
    price: 8000,
  },
  {
    id: 'pioneer_of_the_skies',
    tokenId: 17,
    total: 25,
    price: 24000,
  },
  {
    id: 'pioneer_of_the_seas',
    tokenId: 18,
    total: 10,
    price: 64000,
  },
  {
    id: 'pioneer_of_the_cyberscape',
    tokenId: 19,
    total: 1,
    price: 400000,
  },
  {
    id: 'pioneer_compass',
    tokenId: 20,
    total: 3,
    price: 96000,
  },
  {
    id: 'tron_set',
    tokenId: 26,
    total: 500,
    price: 5000,
  }
];


class List extends React.Component {
  // static propTypes = {
  //   slug: PropTypes.string,
  //   data: PropTypes.shape({
  //     network: PropTypes.object,
  //     balancePLAT: PropTypes.number,
  //   }),
  //   // user: PropTypes.object,
  //   layout: PropTypes.object,
  //   items: PropTypes.object,
  //   dispatch: PropTypes.func,
  //   me: PropTypes.object,
  //   root: PropTypes.object,
  //   listUserPresaleTickets: PropTypes.object,
  // }
    constructor(props) {
        super(props);
        this.state = {
            qtyOf16: null,
            qtyOf17: null,
            qtyOf18: null,
            qtyOf19: null,
            qtyOf20: null,
            qtyOf26: null,
            counter: 0,
        }
    }
    
    presaleTitles() {
        return (
          <Row>
            <style>{`
              .title-section {
                display: flex;
                margin-bottom: '20px'};
              }
              .titles {
                height: 100px;
                display: inline-block;
                margin-left: 5%;
                font-size: 0.9em;
              }
              .title.with-subtitle {
                margin: 0 0 14px 0;
              }
              .subtitle {
                margin: 0;
              }
              .presale-stat {
                line-height: 1.8em !important;
                font-size: 1.8em !important;
                font-weight: 500;
                margin: 20px 0 0 0;
              }
              .presale-label {
                margin: 0 0 10px 0;
              }
              .title-image {
                display: inline-block;
              }
            `}</style>
            <Col md={12}>
              <div className="title-section">
                <div className="title-image">
                    <Image src={require(`../../static/image/sale/icon.jpg`)} height={100} width={129} />
    
                </div>
                <div className="titles">
                  <h1 className="title with-subtitle">Bitizens Pioneers Pre-Sale</h1>
                  <h2 className="subtitle">Show your support, and get unique in-game items in return!</h2>
                </div>
              </div>
            </Col>
          </Row>
        );
    }
    presaleBanner() {
        const {
          qtyOf16,
          qtyOf17,
          qtyOf18,
          qtyOf19,
          qtyOf20,
          qtyOf26,
        } = this.state;
    
        const loading = this.tronWebIsLoading();
    
        const totalSold = loading ? 0 : 1;//getBitizensIGOContract('getTotalBuyersCount','');
    
        const totalBuyers = totalSold;
    
        const progress = totalSold / TOTAL_ITEMS_COUNT; /* Raw items sold progress */
        const progressPercentage = progress * 100; /* Percentage items sold */
    
        let steps = 0;
        if (progress >= 0.3 && progress < 0.7) {
          steps = 1;
        } else if (progress >= 0.7) {
          steps = 2;
        }
    
        return (
          <Row className="presale-banner-row">
            <style>{`
              .presale-stats-wrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }
              .presale-label {
                font-size: .8em;
              }
            `}</style>
            <Col xs={12} sm={7} className="presale-banner-primary">
              <Image responsive src={require(`../..//static/image/sale/header.jpg`)} />
            </Col>
            <Col xs={12} sm={5}>
              <div className="presale-stats-wrapper">
                <div>
                  <h5 className="presale-stat">{loading ? this.textLoading() : `${totalSold} / ${TOTAL_ITEMS_COUNT}`}</h5>
                  <div className="presale-label">Items sold</div>
                </div>
                <div>
                  <h5 className="presale-stat">{loading ? this.textLoading() : totalBuyers}</h5>
                  <div className="presale-label">Total buyers</div>
                </div>
                <div>
                  <h5 className="presale-stat">{loading ? this.textLoading() : `${steps} / 2`}</h5>
                  <div className="presale-label">Bonus rewards unlocked</div>
                </div>
              </div>
              {this.presaleProgress(progressPercentage)}
            </Col>
          </Row>
        );
    }
    presaleProgress(progress) {
        return (
          <div className="presale-progress">
            <Row>
              <style>{`
                :global(.presale-progress) {
                  font-size: .8em;
                }
                :global(.presale-progress .row) {
                  margin-bottom: 0;
                }
                :global(.presale-progress-bar .progress) {
                  height: 4px;
                  margin: 0 0 13px 0;
                }
                .bonus-rewards {
                  width: 100%;
                  margin-bottom: 5px;
                  display: flex;
                }
                .bonus-reward {
                  width: 50%;
                  height: 100px;
                  display: flex;
                  position: relative;
                  border: 1px solid lightgray;
                  vertical-align: top;
                }
                .bonus-reward-title {
                  display: inline;
                  height: 100%;
                  padding: 10px 0 0 0;
                }
                :global(.presale-progress .bonus-reward img) {
                  height: calc(100% - 20px);
                  margin: 10px 0;
                  display: inline;
                }
                .bonus-reward-disabled {
                  opacity: .4;
                  background-color: gray;
                }
              `}</style>
              <Col md={12}>
                <div className="presale-progress-bar">
                  <ProgressBar key={1} now={progress} />
                </div>
              </Col>

              <Col md={12}>
                <div className="bonus-rewards">
                  <div className={`bonus-reward ${progress > 30 ? 'bonus-reward-activated' : 'bonus-reward-disabled'}`}>
                    <Image responsive src={require(`../../static/image/sale/pioneers_drillrbot.png`)} />
                    <div className="bonus-reward-title">
                      {/* <span><FormattedHTMLMessage id={`pages.presale.bitizens.bonus-reward-1-title`} /></span> */}
                      {progress > 30 ? this.unlocked() : null}
                    </div>
                  </div>
                  <div className={`bonus-reward ${progress > 70 ? 'bonus-reward-activated' : 'bonus-reward-disabled'}`}>
                    <Image responsive src={require(`../../static/image/sale/pioneers_rocket.png`)} />
                    <div className="bonus-reward-title">
                      {/* <span><FormattedHTMLMessage id={`pages.presale.bitizens.bonus-reward-2-title`} /></span> */}
                      {progress > 70 ? this.unlocked() : null}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <p>Once 30% of all Bitizens pre-sale items are sold, every participant will be the proud new owner of a unique Dril’r Bot Pioneer-I paint job!</p>
                <p>Selling 70% of all Bitizens pre-sale items will unlock something extra special for all participants - Your very own miniature rocket!</p>
              </Col>
            </Row>
          </div>
        );
    }
    textLoading() {
        if (this.state.counter < 15) {
          // return <ScaleLoader height={10} width={2} color="black" style={{ display: 'inline' }} />;
          return null;
        } else {
          return <img src = {require("../../static/image/icons/missing_data_placeholder.png")} />;
        }
      }
      tronWebIsLoading() {
        const {
          qtyOf16,
          qtyOf17,
          qtyOf18,
          qtyOf19,
          qtyOf20,
          qtyOf26,
        } = this.state;
    
        const loading = (
          qtyOf16 === null ||
          qtyOf17 === null ||
          qtyOf18 === null ||
          qtyOf19 === null ||
          qtyOf20 === null ||
          qtyOf26 === null
        );
    
        return loading;
      }
    unlocked() {
        return (
          <div style={{ marginTop: '10px' }}>Unlocked!</div>// <MDCheck height={20} width={20} color="green" style={{ transform: 'translateY(-5px)' }} />
        );
    }
    bonusReward() {
        return (
            <div className="bonus-reward-tips">
                <style>{`
                `}
                </style>
                <Row>
                <Col xs={12}>
                    <p>We’ve set up some unique stretch goals as well (see above for details!). Reaching them will unlock unique items for all pre-sale participants - an extra special reward for helping us make the Bitizen vision a reality.</p>
                </Col>
                </Row>
                <Row>
                <Col xs={12} sm={2}>
                    <Image responsive src={require('../../static/image/sale/pioneers_drillrbot.png')} />
                </Col>
                <Col xs={12} sm={10}>
                    <p><strong>Bonus Reward 1</strong></p>
                    <p><span>Once 30% of all Bitizens pre-sale items are sold, every participant will be the proud new owner of a unique Dril’r Bot Pioneer-I paint job!</span></p>
                    <p><span>That’s right, this adorable little mining companion is now an ERC721 token - meaning it can be customized! First up on the list of possible ways players can customize their personal Dril’ rBot are paint jobs, and the one featured here is going to be pretty special (Once the pre-sale is over, that’s it, you can’t get it anymore!).</span></p>
                </Col>
                </Row>
                <Row>
                <Col xs={12} sm={2}>
                    <Image responsive src={require(`../../static/image/sale/pioneers_rocket.png`)} />
                </Col>
                <Col xs={12} sm={10}>
                    <p><strong>Bonus Reward 2</strong></p>
                    <p><span>Selling 70% of all Bitizens pre-sale items will unlock something extra special for all participants - Your very own miniature rocket!</span></p>
                    <p><span>The Mini-Rocket is an Accessory item-type, meaning it can be equipped to your character and offer either special visual effects on your Bitizen, or a stat boost, or both! Much like the first bonus item, this Mini Rocket is not going to be available once the Bitizens pre-sale is over!</span></p>
                </Col>
                </Row>
                <Row>
                <Col xs={12}>
                    <p><span>Join us as we bring our love for online games to the blockchain with Bitizens!</span></p>
                </Col>
                </Row>
            </div>
        );
    }
    presaleInfo() {
        return (
          <Row>
            <Col xs={12} className="presale-info">
              <Tabs id="presale-tabs" defaultActiveKey={1}>
                <Tab eventKey={1} >
                {/* title={<FormattedMessage id="global.description" />}  */}
                  {/* <p><FormattedHTMLMessage id={`pages.presale.bitizens.description-text.p1`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.description-text.p2`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.description-text.p3`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.description-text.p4`} /></p> */}
                </Tab>
                <Tab eventKey={2} >
                {/* title={<FormattedMessage id="global.faq" />} */}
                  {/* <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p1`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p2`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p3`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p4`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p5`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p6`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p7`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p8`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p9`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p10`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p11`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p12`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p13`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p14`} /></p>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.faq-text.p15`} /></p> */}
                </Tab>
                <Tab eventKey={3} > 
                {/* title={<FormattedMessage id="global.rules" />} */}
                  {/* <p><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.p1`} /></p>
                  <ol>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l1`} /></li>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l2`} /></li>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l3`} /></li>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l4`} /></li>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l5`} /></li>
                      <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l6`} /></li>
                  </ol>
                  <p><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.p2`} /></p>
                  <ol>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l7`} /></li>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l8`} /></li>
                    <li><FormattedHTMLMessage id={`pages.presale.bitizens.rules-text.l9`} /></li>
                  </ol> */}
                </Tab>
              </Tabs>
            </Col>
          </Row>
        );
    }
    setSection(set, tickets) {
      const itemIndices = [1, 2, 3, 4];
      const remainingForSet = this.state[`qtyOf${set.tokenId}`];
      return (
        <Row key={set.id}>
          <style>{`
            :global(.presale-purchase-set-image) {
              margin-bottom: 5px;
              border: 1px solid lightgray;
            }
          `}</style>
          <Col xs={6} sm={7}>
            <Row>
              <Col xs={12}>
                {/* <h3><FormattedMessage id={`pages.presale.${this.props.slug}.sets.${set.id}.name`} /></h3> */}
              </Col>
              <Col xs={12}>
                <Image responsive src={require(`../../static/image/sale/${set.id}/banner.jpg`)} className="presale-purchase-set-image" />
              </Col>
              <Col xs={12}>
                {/* <p><FormattedMessage id={`pages.presale.${this.props.slug}.sets.${set.id}.description`} /></p> */}
              </Col>
            </Row>
          </Col>
          <Col xs={6} sm={5}>
            <ItemSetDetailsCard
              key={set.id}
              disabled={(remainingForSet === 0 || this.userHasAlreadyPurchasedItem(set.tokenId, tickets))}
              onClick={() => this.purchase(set, tickets)}
              // title={<FormattedMessage id={`pages.presale.${this.props.slug}.sets.${set.id}.name`} />}
              subtitle={
                remainingForSet || remainingForSet === 0 ?
                  <div>{`${remainingForSet} / ${set.total}`}</div> :// <FormattedMessage id="global.remaining" />
                  this.textLoading()
              }
              itemImage={<Image responsive src={remainingForSet === 0 ? require(`../../static/image/sale/sold.png`) : require(`../../static/image/sale/${set.id}/thumbnail.jpg`)} />}
              setDetails={
                set.tokenId !== 20 ? itemIndices.map((v, k) => <li key={k}></li>) : null//<FormattedMessage id={`pages.presale.${this.props.slug}.sets.${set.id}.item${v}.name`} />
              }
              buttonText={`BUY for ${set.price} PLAT`}
            />
          </Col>
        </Row>
      );
    }
    getQtyOfItemsRemaining() {
      SETS.map(set => this.getQtyOfItemRemaining(set.tokenId,set.price));
    }
  
    getQtyOfItemRemaining(setId,price) {
      // const { network } = this.props.root;
      // if (!network || !network.id) return;
    //   const IGOContract = null;
    //   // Trigger approval for transaction
    //   IGOContract.getQty(setId, (err, qty) => {
    //     console.log(setId, qty.c[0]);
    //     if (err) {
    //       console.log.error(err);
    //     } else {
    //         this.setState({ [`qtyOf${setId}`]: qty.c[0] });
    //     }
    //   });
    }
  
    purchase(set, tickets) {
      
    }
  
    userHasAlreadyPurchasedItem(setId, tickets=[]) {
      return Boolean(tickets.find(txObj => txObj.setId === setId));
    }
    componentDidMount() {
      this.getQtyOfItemsRemaining();

      window.scroll(0, 0);
    }
    
    render() {
      const { listUserPresaleTickets } = this.props;
        return (
            <div className="bg-content">
            <style>{`
              body {               
                font-size: 14px;
                color: #130029;
              }
                .bg-content {
                  padding: 102px 10% 40px;
                }
                .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
                  font-family: inherit;
                  font-weight: 500;
                  line-height: 1.1;
                  color: inherit;
              }
              p {
                margin: 0 0 10px;
              }
              h1 {
                font-family: "futura-pt",futura,"Myriad Pro","Proxima Nova",sans-serif;
                font-size: 2.6em;
              }
              h2 {
                font-family: "futura-pt",futura,"Myriad Pro","Proxima Nova",sans-serif;
                font-size: 1.7em;
              }
            `}
            </style>
                <div className="sale">
                    {this.presaleTitles()}
                    {this.presaleBanner()}
                    {this.presaleInfo()}
                    {SETS.map(set => this.setSection(set, listUserPresaleTickets))}
                    <br />
                    {this.bonusReward()}
                </div>
            </div>
        )
    }
}

export default List