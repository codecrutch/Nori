import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      address: "",
      phone: "",
      hours: "",
      price_rating: "$",
      website_url: "",
      business_img_url: "",
      mon: "6am-10pm",
      tues: "6am-10pm",
      wed: "6am-10pm",
      thurs: "6am-10pm",
      fri: "6am-10pm",
      sat: "6am-10pm",
      sun: "6am-10pm"
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertHoursToString = this.convertHoursToString.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const business = Object.assign({}, this.state);
    debugger
    business.hours = this.convertHoursToString();
    this.props.getLatitudeAndLongitude(this.state.address).then(
      (res) => {
        console.log(res);
        let geolocation = res.results[0];
        //grabout lat and long and put into business
        business.address = geolocation.formatted_address;
        business.lat = geolocation.geometry.location.lat;
        business.lng = geolocation.geometry.location.lng;
        console.log(business);
        this.props.processForm(business);
      },
      (err) => this.props.addressError()
    )
  }

  convertHoursToString() {

    let {mon,tues,wed,thurs,fri,sat,sun} = this.state
    let hourString = [
      "Mon:",mon,
      "Tue:",tues,
      "Wed:",wed,
      "Thu:",thurs,
      "Fri:",fri,
      "Sat:",sat,
      "Sun:",sun
    ]


    hourString = hourString.join(' ');
    debugger

    return hourString;

  }

  handleInput(event, field){
    let value = event.currentTarget.value;
    this.setState({ [field]: value });
  }

  render(){
    let hoursPlaceholder = "ex. 6:00am - 5:45pm";

    return(
      <section className='business-form-layout container'>
        <section className='business-form-container row'>
          <div className="form-left col-med-6 col-lg-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Emoji_u1f363.svg/2000px-Emoji_u1f363.svg.png" className="form-image"></img>
          </div>

          <div className="form-right col-med-6 col-lg-6">
            <p className='business-form-header'><span>{this.props.formType}</span></p>
            <form className="business-form-form" onSubmit={(e) => this.handleSubmit(e)}>
              <input className="business-form-name" placeholder="Business Name" onChange={(e) => this.handleInput(e, "name")} />
              <br />
              <input className="business-form-address" placeholder="Address" onChange={(e) => this.handleInput(e, "address")} type='text' />
              <br />
              <input className="business-form-website-url" placeholder="Website URL" onChange={(e) => this.handleInput(e, "website_url")} type='text' />
              <br />
              <input className="business-form-business-img-url" placeholder="Business Image URL" onChange={(e) => this.handleInput(e, "business_img_url")} type='text' />
              <br />

              <label>$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value='0' />
              </label>

              <label>$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 1 } />
              </label>

              <label>$$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 2 } />
              </label>

              <label>$$$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 3 } />
              </label>

              <label>$$$$$
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 4 } />
              </label>


              <br />
              <input className="business-form-phone" placeholder="Phone Number" onChange={(e) => this.handleInput(e, "phone")} type='text' />
              <br />

              <br />

              <section id="hours">
                <input className="mon" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "mon")} type='text' value={this.state.mon} />
                <br />
                <input className="tues" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "tues")} type='text' value={this.state.tues} />
                <br />
                <input className="wed" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "wed")} type='text' value={this.state.wed} />
                <br />
                <input className="thurs" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "thurs")} type='text' value={this.state.thurs} />
                <br />
                <input className="fri" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "fri")} type='text' value={this.state.fri} />
                <br />
                <input className="sat" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "sat")} type='text' value={this.state.sat} />
                <br />
                <input className="sun" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "sun")} type='text' value={this.state.sun} />
                <br />
              </section>
              <br />

              <input id="business-form-submit" className="btn btn-large btn-info" type="submit" value={this.props.formType} />
            </form>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(BusinessForm);
