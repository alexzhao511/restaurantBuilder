import React, {Component} from 'react';
import Head from './Head';
import Landing from './Landing';

class LandingHead extends Component {
    render() {
        let {landingHead} = this.props;
        console.log(landingHead);
        return (
            <div className={'landingHead'} style={{backgroundImage:`url(${landingHead.imageUrl})`}}>
                <div className={'inner_wrap'}>
                    <h4 className={'landingHead_label'}>{landingHead.label}</h4>
                    <p className={'landingHead_desc'}>{landingHead.description}</p>
                </div>
            </div>
        );
    }
}

export default LandingHead;