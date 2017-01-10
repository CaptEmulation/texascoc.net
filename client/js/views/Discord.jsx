import React from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import mobile1 from '../../img/mobile1.png';
import mobile2 from '../../img/mobile2.png';
import {
  requestInvite,
  captchaComplete,
} from '../actions';

function mapStateToProps({ discord }) {
  const {
    isCaptcha,
    isInvite,
    inviteCode,
  } = discord;
  return {
    isCaptcha,
    isInvite,
    inviteCode,
  };
}

function mapDisptachToProps(dispatch) {
  return {
    requestInvite() {
      dispatch(requestInvite());
    },
    captchaComplete() {
      dispatch(captchaComplete());
    },
  };
}

const Discord = ({
  isCaptcha,
  isInvite,
  inviteCode,
  requestInvite,
  captchaComplete,
}) => (
  <div className="container">
    {(isCaptcha || !isInvite) ? <div className="col-md-12">
      <h1 className="centered">Join our Discord group!</h1>
    </div> : null }
    {!(isCaptcha || isInvite) ? <div className="col-md-12">
      <button className="btn btn-primary btn-lg btn-block" onClick={requestInvite}>
        Request Invite Link
      </button>
    </div> : null}
    {isCaptcha ? <div className="col-md-4 col-sm-1" /> : null }
    {isCaptcha ? <div className="col-md-3">
      <ReCAPTCHA
        sitekey="6Lcnvw8TAAAAAFKH1tXYFtbyVriBbZWTdIWk7I0x"
        onChange={captchaComplete}
      />
    </div> : null}
    {isInvite ? <div className="col-md-12">
      <br />
      <h2 className="centered">
        <a href={`https://discord.gg/${inviteCode}`}>
          {`https://discord.gg/${inviteCode}`}
        </a>
      </h2>
    </div> : null}
    {isInvite ? <div className="col-md-12">
      <br /><br />
      <h3 className="centered">
        If invite link does not work after Discord app launches, open Discord menu
      </h3>
      <br />
      <div className="centered"><img role="presentation" src={mobile1} /></div>
      <br />
      <h3 className="centered">
        Then click on the plus button to add a team
      </h3>
      <br />
      <div className="centered"><img role="presentation" src={mobile2} /></div>
      <br />
      <h3 className="centered">
        And paste in the invite code {inviteCode}
      </h3>
    </div> : null}
  </div>
);


export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(Discord);
