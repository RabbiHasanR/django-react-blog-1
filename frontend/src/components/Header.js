import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    renderLinks(){
	/* console.log("Rendering header links.");*/
	if(this.props.authenticated) {
	    return (
		[
		    <Link key={1} to={{ pathname: '/post/new'}} className="main-menu">
			New post
		    </Link>,
		    
		    <Link key={2} to={{ pathname: '/signout'}}>
			Sign out
		    </Link>
		]
	    );
	    
	} else {
	    return (
		[
		]
	    );

	    /*
	       <LinkContainer to={{ pathname: '/signup'}}>
	       <NavItem eventKey={3}>Sign Up</NavItem>
	       </LinkContainer>
	     */	    
	}
	
    }
    
    render() {
	return (
	    <header>
		<div className="container">
		    <div className="row">      
			<div className="col-xs-4 search">
			    <Link className="logo" to={'/'}>
				digital<span className="bold">mind</span>
			    </Link>
			</div>
			<div className="col-xs-8 main-menu">
			    <div className="right">
				<div className="dropdown">
				    <Link to={'/'}>
					Browse
				    </Link>
				    <ul className="dropdown-menu">
					<li><a href="all">All</a></li>
				    </ul>	
				</div>

				<Link to={{ pathname: '/subscribe'}}>
				    Subscribe
				</Link>
				
				{ this.renderLinks() }
			    </div>
			</div>
		    </div>
		</div>
	    </header>
	);
    }
}


function mapStateToProps(state) {
    return {
	authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Header);