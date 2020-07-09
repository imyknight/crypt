import React from 'react'
import Header from './Header'
import '../styles/home.scss'
import data from '../data'

function Home() {
  return (
    <Header>
      <div className="body">
        {/* section 1 */}
        <div className="sec-1">
          <div className="c1 pd-30">
            <div className="title">{data.title}</div>
            <div className="content">{data.p}</div>
            <img className="img-city" alt="city" src="/city.svg" />
          </div>
          <div className="c2">
            <div className="sec-top">
              <div className="invest">
                <div className="text">
                  INVEST <br /> PROFIT
                  <img className="icon" alt="icon" src="/icon-arow.svg" />
                </div>
              </div>
              <div className="sec-mid">
                <div className="percent">
                  <div className="number">5</div>%
                </div>
                <div className="daily">DAILY FOR 15 DAYS</div>
              </div>
            </div>
            <div className="sec-bot">
              <div className="fter">
                Start with as little as&nbsp; <b className="wt">$20</b>. Instant Withdrawals.
              </div>
              <div className="fter">
                Principal included.&nbsp;<b className="wt">150%</b> &nbsp;total return. Earn each calendar day.
              </div>
            </div>
          </div>
          <div className="c3 pd-30">
            <div className="sec-top">
              <div className="percent">
                <div className="number">10</div>%
              </div>
            </div>
            <div className="sec-mid">
              AFFILIATE PROGRAM
            </div>
            <div className="sec-bot">
              <span>
                {data.c3_content1}<br />
                <div className="level">
                  Level 1 : <b>6&nbsp;%</b> <br />
                  Level 2 : <b>3&nbsp;%</b> <br />
                  Level 3 : <b>1&nbsp;%</b> <br />
                </div>
              </span>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="sec-2">
          <div className="c1">
            <div className="sec-top">
              <div className="title">BUSINESS SECTORS</div>
              <div className="btn-bn">
                <img alt="back" src="/back.svg" />
                <img alt="next" src="/next.svg" />
              </div>
            </div>
            <div className="slide">
              <div className="sec-mid">
                <img className="icon" alt="icon" src="/icon.svg" />
              </div>
              <div className="sec-bot">
                {data.sec_2_c1}
              </div>
            </div>
          </div>
          <div className="c2">
            <div className="sec-top section">
              RUNNING DAYS <br />
              <div className="num blue">79</div>
            </div>
            <div className="sec-mid section">
              TOTAL DEPOSITED <br />
              <div className="num green">$ 1,940,573.98</div>
            </div>
            <div className="sec-bot section">
              TOTAL WITHRAW <br />
              <div className="num orange">$ 1,126,471.43</div>
            </div>
          </div>
          <div className="c3">
            <div className="section">NEWS</div>
            <div className="content">
              {data.sec_2_c3_content1} <br />
              {data.sec_2_c3_content2}
            </div>
          </div>
          <div className="c4">
            <div className="sec-top"></div>
            <div className="sec-mid">
              <div className="line">
                <img alt="icon-m" src="/icon-mess.svg" className="icon" />
                <div className="text ml-10 uline">Support Message</div>
              </div>
              <div className="line mt-30">
                <div className="text">We accept : </div>
                <img alt="btc" className="icon-l ml-10" src="/btc.svg" />
                <img alt="eth" className="icon-l ml-10" src="/eth.svg" />
              </div>
              <div className="row-btn mt-30">
                <img alt="apple" src="/button-app-store.svg" />
                <img className="ml-30" alt="apple" src="/button-googleplay.svg" />
              </div>
            </div>
            <div className="sec-bot">
              <div className="text">© 2018 CryptoKingdom</div>
              <div className="list-icon">
                <img className=" icon" alt="facebook" src="/facebook.svg" />
                <img className=" icon" alt="tw" src="/twitter.svg" />
                <img className=" icon" alt="tele" src="/te-legram.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default Home