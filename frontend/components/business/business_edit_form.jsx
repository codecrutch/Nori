import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessEditForm extends React.Component {
  constructor(props){
    super(props);

    let business = props.business;
    this.state = {
      name: business.name,
      address: business.address,
      phone: business.phone,
      hours: business.hours,
      price_rating: business.price_rating,
      website_url: business.website_url,
      business_img_url: business.business_img_url,
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
    this.handleDelete = this.handleDelete.bind(this);
    this.convertHoursToString = this.convertHoursToString.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let business = newProps.business;
    this.setState({
      name: business.name,
      address: business.address,
      phone: business.phone,
      hours: business.hours,
      price_rating: business.price_rating,
      website_url: business.website_url,
      business_img_url: business.business_img_url,
      mon: "6am-10pm",
      tues: "6am-10pm",
      wed: "6am-10pm",
      thurs: "6am-10pm",
      fri: "6am-10pm",
      sat: "6am-10pm",
      sun: "6am-10pm"
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const business = Object.assign({}, this.state);
    business.hours = this.convertHoursToString();
    this.props.getLatitudeAndLongitude(this.state.address).then(
      (res) => {
        if (res.status === 'ZERO_RESULTS') {
          this.props.addressError("Couldn't Find Address");
        } else {
          let geolocation = res.results[0];
          //grabout lat and long and put into business
          business.address = geolocation.formatted_address;
          business.lat = geolocation.geometry.location.lat;
          business.lng = geolocation.geometry.location.lng;
          business.id = this.props.match.params.businessId;
          this.props.processForm(business);
        }
      },
      (err) => this.props.addressError("Address Missing")
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
    return hourString;
  }

  handleInput(event, field){
    let value = event.currentTarget.value;
    this.setState({ [field]: value });
  }

  handleDelete() {
    let businessId = this.props.match.params.businessId;
    let answer = confirm("Are you sure you want to delete this business?");
    if (answer) {
      this.props.deleteBusiness(businessId).then(
        (e) => this.props.history.replace("/"),
        (e) => this.props.history.replace("/")
      );
    }
  }

  render(){
    let hoursPlaceholder = "ex. 6:00am - 5:45pm";

    return(
      <section className='business-form-layout container'>
        <section className='business-form-container row'>
          <div className="col-med-12 col-lg-12 text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Emoji_u1f363.svg/2000px-Emoji_u1f363.svg.png" className="business-form-image"></img>
          </div>

            <form className="business-edit-form" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-right col-sm-6 col-med-6 col-lg-6 text-center">
            <p className='business-form-header'><span>Update {this.state.name}</span></p>
              <label>Business Name
              <br />
                <input className="business-form-name" placeholder="Business Name" onChange={(e) => this.handleInput(e, "name")} type='text' value={this.state.name}/>
              </label>
              <br />
              <label>Address
              <br />
                <input className="business-form-address" placeholder="Address" onChange={(e) => this.handleInput(e, "address")} type='text' value={this.state.address}/>
              </label>
              <br />
              <label>Website address
              <br />
                <input className="business-form-website-url" placeholder="Website URL" onChange={(e) => this.handleInput(e, "website_url")} type='text' value={this.state.website_url}/>
              </label>
              <br />
              <label>Business Profile Image address
              <br />
                <input className="business-form-business-img-url" placeholder="Business Image URL" onChange={(e) => this.handleInput(e, "business_img_url")} type='text' value={this.state.business_img_url}/>
              </label>
              <br />
              <label>Phone #
              <br />
              <input className="business-form-phone" placeholder="Phone Number" onChange={(e) => this.handleInput(e, "phone")} type='text' value={this.state.phone} />
              </label>
              <br />

              <span>Average Price of Meal</span>
              <br />
              <label>
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 0 } />
                  $
              </label>

              <label>
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 1 } />
                  $$
              </label>

              <label>
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 2 } />
                  $$$
              </label>

              <label>
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 3 } />
                  $$$$
              </label>

              <label>
                <input className="business-form-price-rating"
                  placeholder="Average Price"
                  onChange={(e) => this.handleInput(e, "price_rating")}
                  type='radio'
                  name="price_rating"
                  value={ 4 } />
                  $$$$$
              </label>

              <br />
              </div>

              <section id="hours" className="col-sm-6 col-med-6 col-lg-6 text-center">
                <span>Hours of Operation</span>
                <br />
                <label>Monday
                <br />
                  <input className="mon" name="monday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "mon")} type='text' value={this.state.mon} />
                  </label>
                <br />
                <label>Tuesday
                <br />
                  <input className="tues" name="tuesday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "tues")} type='text' value={this.state.tues} />
                  </label>
                <br />
                <label>Wednesday
                <br />
                  <input className="wed" name="wednesday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "wed")} type='text' value={this.state.wed} />
                  </label>
                <br />
                <label>Thursday
                <br />
                  <input className="thur" name="thursday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "thurs")} type='text' value={this.state.thurs} />
                  </label>
                <br />
                <label>Friday
                <br />
                  <input className="fri" name="friday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "fri")} type='text' value={this.state.fri} />
                  </label>
                <br />
                <label>Saturday
                <br />
                  <input className="sat" name="saturday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "sat")} type='text' value={this.state.sat} />
                  </label>
                <br />
                <label>Sunday
                <br />
                  <input className="sun" name="sunday" placeholder={hoursPlaceholder} onChange={(e) => this.handleInput(e, "sun")} type='text' value={this.state.sun} />
                  </label>
                <br />
                <input id="business-form-submit" className="btn btn-large btn-info" type="submit" value="Save Changes" />
              </section>
              <br />

              <button id="delete-business" className='btn btn-large btn-danger' onClick={this.handleDelete}>DELETE BUSINESS</button>
            </form>
        </section>
      </section>
    );
  }
}

export default withRouter(BusinessEditForm);
