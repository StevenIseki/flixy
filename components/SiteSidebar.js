import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './SiteSidebar.css'
import CSSModules from 'react-css-modules'
import { sidebarSelector } from '../selectors'
import map from 'lodash/map'
import { connect } from 'react-redux'

@connect(sidebarSelector, null)
@CSSModules(styles, { allowMultiple: true })
export default class SiteSidebar extends Component {

  render() {
    const { fetching } = this.props

    const links = [
      { to: '/movies', text: 'Movies', fetching: fetching['movies'] },
      { to: '/reviews', text: 'Reviews', fetching: fetching['reviews'] }
    ]

    return (
      <div styleName='SiteSidebar'>
        <Link styleName='Label' to='/'>Movie Flix</Link>

        <div>
          {
            map(links, (link, i) => {

              const linkClass = (window.location.pathname.indexOf(link.to) !== -1) ? 'Link ActiveLink' :
                'Link'

              return (
                <Link key={i} styleName={linkClass} to={link.to}>
                  <span styleName='LinkText'>{link.text}</span>
                </Link>
              )
            }
          )
        }
        </div>
      </div>
    )
  }
}
