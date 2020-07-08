import React, {Component} from 'react';

class Menu extends Component {
    render() {
        let {menuItems} = this.props;
        return (
            <div>
                <section id="menu" className="spacer-double-lg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="mb-5 pb-5 text-center">
                                    <span className="label-title mb-3">Our Menu</span>
                                    <h1 className="h2 font-alt">Foxeresto Menu</h1>
                                    <p className="w-md-40 mb-0 mx-auto lead">The time has come to bring those ideas and
                                        plans to life. This is where we really begin to visualize.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <ul className=" mb-5 pb-5 nav nav-menu-tabs" role="tablist">
                                    <li><a className="active show font-weight-700 letter-spacing-medium"
                                           data-toggle="tab" href="#tab-one" role="tab" aria-controls="tab-one"
                                           aria-selected="true">Breakfest</a></li>
                                    <li><a className="font-weight-700 letter-spacing-medium" data-toggle="tab"
                                           href="#tab-two" role="tab" aria-controls="tab-two"
                                           aria-selected="false">Lunch</a></li>
                                    <li><a className="font-weight-700 letter-spacing-medium" data-toggle="tab"
                                           href="#tab-three" role="tab" aria-controls="tab-three"
                                           aria-selected="false">Dinner</a></li>
                                    <li><a className="font-weight-700 letter-spacing-medium" data-toggle="tab"
                                           href="#tab-four" role="tab" aria-controls="tab-four"
                                           aria-selected="false">Drinks</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'row justify-content-center'}>
                        <div className={'col-8 item-wrap'}>
                            {menuItems.map((item, key)=>{
                                return (
                                    <div className="menu-item" key={{key}}>
                                    <img className="avatar-sm rounded-circle mr-3" src={item.imageUrl} alt=""/>
                                    <div className="media-body position-relative">
                                        <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                            className="bg-white">{item.label}</span></h6>
                                        <span className="dots-price"></span>
                                        <span className="menu-price mb-0 h6">{item.price}</span>
                                        <p className="mb-0 font-size-14">{item.description}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Menu;