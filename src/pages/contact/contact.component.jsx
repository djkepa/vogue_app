import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { ReactComponent as Github } from '../../assets/github-logo.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin-logo.svg';
import { ReactComponent as Email } from '../../assets/mail.svg';

import './contact.styles.scss';

const ContactPage = () => {
	return (
		<div className="container">
			<div className="left-side">
				<a className="custom-button" href="https://github.com/djkepa">
					<Github className="git" />
				</a>
				<a className="custom-button" href="https://www.linkedin.com/in/branislav-grozdanović">
					<Linkedin className="in" />
				</a>
				<a className="custom-button" href="mailto:deejaykepa@gmail.com">
					<Email className="em" />
				</a>
			</div>
			<div className="right-side">
				<Logo className="logo" />
				<h1 className="logo-title">Vogue</h1>
			</div>
		</div>
	);
};

export default ContactPage;
