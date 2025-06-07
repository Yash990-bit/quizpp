import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <>
    <div className="pricing-page">
      <div className="pricing-head">
        <h2>
          Use <span>Quizify</span> for unlimited meetings a year
        </h2>
        <div className="toggle">
          <button className="monthly">Monthly</button>
          <button className="yearly active ">Yearly</button>
        </div>
      </div>

      <div className="pricing-cards">
        <div className="card basic">
          <h3>Basic</h3>
          <p className="price">$0</p>
          <p className="subtext">Free forever</p>
          <button className="btn teal">Get started for free</button>
          <h4>Includes</h4>
          <ul className="features-list plan-basic">
            <li>Up to 100 participants</li>
            <li>Basic Audience Q&A</li>
            <li>3 polls per slido</li>
          </ul>
        </div>

        <div className="card engage">
          <h3>Engage</h3>
          <p className="price">$12.5 <span className="unit">/ month</span></p>
          <p className="subtext">Billed $150 annually</p>
          <button className="btn orange">Buy now</button>
          <h4>Everything in Basic plus:</h4>
          <ul className="features-list plan-engage">
            <li>Up to 200 participants</li>
            <li>Unlimited polls and quizzes</li>
            <li>Surveys</li>
            <li>Data exports and <a href="#">more</a></li>
          </ul>
          <a className="why" href="#">Why choose Engage?</a>
        </div>

        <div className="card professional">
          <div className="tag">2 users included</div>
          <h3>Professional</h3>
          <p className="price">$50 <span className="unit">/ month</span></p>
          <p className="subtext">Billed $600 annually</p>
          <button className="btn green">Buy now</button>
          <h4>Everything in Engage plus:</h4>
          <ul className="features-list plan-professional">
            <li>Up to 1,000 participants</li>
            <li>Moderation of questions</li>
            <li>Branding</li>
            <li>Advanced privacy options</li>
            <li>Organization analytics and <a href="#">more</a></li>
          </ul>
          <a className="why" href="#">Why choose Professional?</a>
        </div>

        <div className="card enterprise">
          <h3>Enterprise</h3>
          <p className="price">$150 <span className="unit">/ month</span></p>
          <p className="subtext">Billed $1800 annually</p>
          <button className="btn purple">Buy now</button>
          <h4>Everything in Professional plus:</h4>
          <ul className="features-list plan-enterprise">
            <li>3 members included</li>
            <li>Up to 5,000 participants</li>
            <li>SSO for members & participants</li>
            <li>Member provisioning</li>
            <li>Spaces and <a href="#">more</a></li>
          </ul>
          <a className="why" href="#">Why choose Enterprise?</a>
        </div>
      </div>
    </div>

    <div className="comparison-section">
  <h2 className="compare-heading">Compare plans</h2>
  <p className="compare-subtext">All prices excl. VAT</p>

  <div className="plan-columns">
    <div className="plan-info"></div>
    <div className="plan basic">
      <h4>Basic</h4>
      <p className="price">$0</p>
      <p className="member-note">Single member</p>
    </div>
    <div className="plan engage">
      <h4>Engage</h4>
      <p className="price">$12.5</p>
      <p className="member-note">1 member</p>
    </div>
    <div className="plan professional">
      <h4>Professional</h4>
      <p className="price">$50</p>
      <p className="member-note">2 members</p>
    </div>
    <div className="plan enterprise">
      <h4>Enterprise</h4>
      <p className="price">$190</p>
      <p className="member-note">4 members</p>
    </div>
  </div>

  <div className="comparison-table">
    <div className="feature-group">
      <h5>Essentials</h5>
      <div className="row">
        <span>Slidos</span>
        <span>Unlimited</span>
        <span>Unlimited</span>
        <span>Unlimited</span>
        <span>Unlimited</span>
      </div>
      <div className="row">
        <span>Max. joined participants per slido</span>
        <span>100</span>
        <span>200</span>
        <span>1000</span>
        <span>5000</span>
      </div>
      <div className="row">
        <span>Additional participants</span>
        <span>❌</span>
        <span>❌</span>
        <span>❌</span>
        <span><a href="#">Contact sales</a></span>
      </div>
      <div className="row">
        <span>30-day money-back guarantee</span>
        <span>❌</span>
        <span className="check orange">✔</span>
        <span className="check green">✔</span>
        <span className="check purple">✔</span>
      </div>
    </div>

    <div className="feature-group">
      <h5>Audience Q&A</h5>
      <div className="row">
        <span>Crowdsource questions</span>
        <span className="check teal">✔</span>
        <span className="check orange">✔</span>
        <span className="check green">✔</span>
        <span className="check purple">✔</span>
      </div>
      <div className="row">
        <span>Moderation</span>
        <span>❌</span>
        <span>❌</span>
        <span className="check green">✔</span>
        <span className="check purple">✔</span>
      </div>
      <div className="row">
        <span>Advanced Q&A settings</span>
        <span>❌</span>
        <span>❌</span>
        <span className="check green">✔</span>
        <span className="check purple">✔</span>
      </div>
      <div className="row">
        <span>Replies</span>
        <span>❌</span>
        <span>❌</span>
        <span className="check green">✔</span>
        <span className="check purple">✔</span>
      </div>
      <div className="row">
        <span>Labels</span>
        <span>❌</span>
        <span>❌</span>
        <span className="check green">✔</span>
        <span className="check purple">✔</span>
      </div>
    </div>
  </div>
</div>

<div className="special-plans">
  <div className="special-card">
    <div className="icon-box purple">
      <i className="fas fa-user-star"></i>
    </div>
    <div className="special-content">
      <h3>Slido for large enterprises</h3>
      <div className="description-group">
        <p>There’s room for everyone. Contact us to get a tailored plan for your entire organization.</p>
        <ul className="feature-list purple">
          <li>10+ members</li>
          <li>Up to 20,000 participants per slido</li>
          <li>Custom billing and terms</li>
        </ul>
      </div>
    </div>
    <div className="action">
      <button className="btn purple">Contact us</button>
    </div>
  </div>

  <div className="special-card">
    <div className="icon-box green">
      <i className="fas fa-graduation-cap"></i>
    </div>
    <div className="special-content">
      <h3>Quizify for education</h3>
      <div className="description-group">
        <p>See our discounted plans designed for schools and universities.</p>
        <ul className="feature-list green">
          <li>Up to 500 students in the lowest plan</li>
          <li>For educators and students with valid academic email address</li>
        </ul>
      </div>
    </div>
    <div className="action">
      <button className="btn green">See Education Plans</button>
    </div>
  </div>
</div>


  </>
  )
}

export default Pricing