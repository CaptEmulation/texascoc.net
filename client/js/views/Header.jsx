import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cn from 'classnames';
import { changePage } from '../actions';

function mapStateToProps({ navItems }) {
  return {
    navItems,
  };
}

function mapDisptachToProps(dispatch) {
  return {
    onPageChange(pageName) {
      dispatch(changePage(pageName));
    },
  };
}

const styles = {
  root: cn('navbar', 'navbar-default'),
  navBarContainer: cn('container-fluid'),
  navBarHeader: cn('navbar-header'),
  menu: cn('collapse', 'navbar-collapse'),
  navItem: cn('nav-item'),
  menuList: cn('nav', 'navbar-nav'),
  collaspedMenuButton: cn('navbar-toggle', 'collapsed'),
  brand: cn('navbar-brand')
};

const Header = ({
  navItems,
  onPageChange,
}) => (
  <nav className={styles.root}>
    <div className={styles.navBarContainer}>
      {/* Brand and toggle get grouped for better mobile display */}
      <div className={styles.navBarHeader}>
        <button type="button" className={styles.collaspedMenuButton} data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className={styles.brand} href="#">TexasCOC</a>
      </div>

      {/* Collect the nav links, forms, and other content for toggling */}
      <div className={styles.menu} id="navbar-collapse">
        <ul className={styles.menuList}>
          {navItems.map(({ name, label }) => {
            return (
              <li key={name} className={cn({
                [styles.navItem]: true
              })}>
                <Link to={`/${name}`}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </div> {/* /.navbar-collapse */}
    </div> {/* /.container-fluid */}
  </nav>
)

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(Header);
