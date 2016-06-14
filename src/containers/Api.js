import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Api = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  render () {
    return (
      <div className='sans-serif relative'>
        <Header />
        <div className='measure-wide pa4'>
          <h1 className='f3 b pv3'>
            Application Programming Interface
          </h1>
          <p className='mid-gray lh-copy'>
            <a href='http://randoma11y.com'>randoma11y</a> offers a fully featured
            RESTful API. All our data is open and provided for no charge. 3rd party
            applications can vote or display accessible combinations by querying
            our JSON API.
          </p>
        </div>
        <h3 className='ph4'>Combinations</h3>
        <p className='measure-wide mid-gray lh-copy pa4'>
          The <code>Combo</code> resource is the bread and butter of randoma11y.
          It consists of two hex colors and <code>has_many :votes</code>.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>irb(main):001:0&gt; Combo.first<br /><br />
Combo Load (2.0ms)  SELECT  "combos".* FROM "combos" ORDER BY "combos"."id" ASC LIMIT $1  [["LIMIT", 1]]<br /><br />
=&gt; #&lt;Combo id: 1, color_one: "#111", color_two: "#fafafa", created_at: "2016-05-29 17:31:09", updated_at: "2016-06-03 15:34:04", contrast: nil, votes_count: 4>
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos/top</h5>
        <p className='measure-wide mid-gray lh-copy pa4'>
          Grab the top 100 <code>Combos</code> based on the number of up votes.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          curl http://randoma11y.com/combos/top <br /><br />
          =&gt; [...]
          </p>
        </div>
        <h5 className='ph4 pt4 f6 code'>GET /combos?page=3&per_page=50</h5>
        <p className='measure-wide mid-gray lh-copy pa4'>
          Grab the 3rd page of 50 combos.
        </p>
        <div className='lh-copy pa4 bg-near-white' style={{wordBreak: 'break-all'}}>
          <p className='code'>
          curl 'http://randoma11y.com?page=3&per_page=50'<br /><br />
          =&gt; [...]
          </p>
        </div>
        <Footer />
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api)
